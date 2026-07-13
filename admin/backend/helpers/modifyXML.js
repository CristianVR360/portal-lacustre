const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const { supabase } = require('../database/supabase');

const xmlFilePath = path.join(__dirname, '../../../masterplan/pano.xml');

// Helper to read and parse local XML
const getData = async () => {
  try {
    const data = await fs.promises.readFile(xmlFilePath, 'utf-8');
    const result = await xml2js.parseStringPromise(data);
    return result;
  } catch (error) {
    console.error('Error reading XML file:', error);
    throw error;
  }
};

// Find the main panorama containing the lot hotspots
const getMainPanorama = (result) => {
  if (!result || !result.tour || !result.tour.panorama) return null;

  const startNodeId = result.tour.$ && result.tour.$.start;
  const lotSkinIds = ['ht_disponible', 'ht_reservado', 'ht_nodisponible', 'ht_promocion'];
  
  if (startNodeId) {
    const startPanorama = result.tour.panorama.find(p => p.$.id === startNodeId);
    if (startPanorama && startPanorama.hotspots && startPanorama.hotspots[0].hotspot) {
      const hasLotHotspot = startPanorama.hotspots[0].hotspot.some(h => 
        h.$.skinid && lotSkinIds.includes(h.$.skinid.toLowerCase())
      );
      if (hasLotHotspot) {
        return startPanorama;
      }
    }
  }

  for (const p of result.tour.panorama) {
    if (p.hotspots && p.hotspots[0].hotspot) {
      const hasLotHotspot = p.hotspots[0].hotspot.some(h => 
        h.$.skinid && lotSkinIds.includes(h.$.skinid.toLowerCase())
      );
      if (hasLotHotspot) {
        return p;
      }
    }
  }

  let bestPanorama = null;
  let maxHotspots = -1;
  for (const p of result.tour.panorama) {
    const count = p.hotspots && p.hotspots[0].hotspot ? p.hotspots[0].hotspot.length : 0;
    if (count > maxHotspots) {
      maxHotspots = count;
      bestPanorama = p;
    }
  }

  return bestPanorama;
};

// Sync database state into local pano.xml
const syncDatabaseToXML = async (dbLots) => {
  try {
    const result = await getData();
    const panorama = getMainPanorama(result);

    if (panorama) {
      const nodeId = panorama.$.id;
      if (panorama.hotspots && panorama.hotspots.length > 0) {
        const hotspots = panorama.hotspots[0].hotspot;

        dbLots.forEach((dbLot) => {
          const hotspot = hotspots.find(h => h.$.id.toLowerCase() === dbLot.id.toLowerCase());
          if (hotspot) {
            // Update attributes from database record
            hotspot.$.description = dbLot.description || '';
            hotspot.$.skinid = dbLot.skinid || '';
            hotspot.$.url = dbLot.url || '';
          }
        });

        // Builder options to preserve format
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(result);

        await fs.promises.writeFile(xmlFilePath, xml);
        console.log(`Successfully synced ${dbLots.length} database lots to local pano.xml (Node: ${nodeId})`);
      } else {
        console.warn(`Panorama with id "${nodeId}" has no hotspots to sync`);
      }
    } else {
      console.warn('No main panorama found in tour XML for sync');
    }
  } catch (error) {
    console.error('Error in syncDatabaseToXML:', error);
    throw error;
  }
};

const updateHotspotAttributes = async (hotspotId, description, status, newInfo) => {
  try {
    // 1. Update/Upsert the single lot in Supabase
    const { error: dbError } = await supabase
      .from('lots')
      .upsert({
        id: hotspotId,
        description,
        skinid: status,
        url: newInfo,
        updated_at: new Date().toISOString()
      });

    if (dbError) {
      console.error('Error saving lot to Supabase:', dbError);
      return dbError.message;
    }

    // 2. Fetch all lots from database to synchronize the local XML file in one pass
    const { data: dbLots, error: fetchError } = await supabase
      .from('lots')
      .select('*');

    if (fetchError) {
      console.error('Error fetching all lots for sync:', fetchError);
      return fetchError.message;
    }

    // 3. Write back to local XML (try/catch for read-only systems)
    try {
      await syncDatabaseToXML(dbLots);
    } catch (writeError) {
      console.warn('Non-fatal: Could not write updated XML to local filesystem (likely read-only environment like Vercel).', writeError.message);
    }
    return null;
  } catch (error) {
    console.error('Error in updateHotspotAttributes:', error);
    return error.message;
  }
};

// Fetch lots from database (acting as the source of truth)
const getAllHotspots = async () => {
  try {
    const { data: dbLots, error } = await supabase
      .from('lots')
      .select('*');

    if (error) {
      console.error('Error retrieving lots from Supabase:', error);
      throw error;
    }

    // Map database structures back to match local frontend schema expectation
    const excludedIds = ['point01', 'point02', 'point03', 'point04', 'point05', 'point25'];
    const formattedLots = (dbLots || [])
      .filter(lot => !excludedIds.includes(lot.id.toLowerCase()))
      .map(lot => ({
        id: lot.id || '',
        tilt: lot.tilt || '',
        url: lot.url || '',
        skinid: lot.skinid || '',
        title: lot.title || '',
        pan: lot.pan || '',
        description: lot.description || ''
      }));

    // Natural alphanumeric sorting
    formattedLots.sort((a, b) => {
      const regexAlphaNum = /^([A-Z]*)-?(\d+)$/;
      const matchA = a.id.match(regexAlphaNum);
      const matchB = b.id.match(regexAlphaNum);
      
      if (matchA && matchB) {
        const [, etapaA, numA] = matchA;
        const [, etapaB, numB] = matchB;
        
        if (etapaA === etapaB) {
          return parseInt(numA) - parseInt(numB);
        } else {
          return etapaA.localeCompare(etapaB);
        }
      } else {
        return a.id.localeCompare(b.id);
      }
    });

    return formattedLots;
  } catch (error) {
    console.error('Error in getAllHotspots:', error);
    throw error;
  }
};

// Parse initial hotspots from pano.xml
const getAllHotspotsFromXML = async () => {
  try {
    const result = await getData();
    const panorama = getMainPanorama(result);
    
    if (panorama && panorama.hotspots && panorama.hotspots[0].hotspot) {
      const excludedIds = ['point01', 'point02', 'point03', 'point04', 'point05', 'point25'];
      const uniqueLots = new Map();

      panorama.hotspots[0].hotspot.forEach(h => {
        const id = h.$.id || '';
        const idLower = id.toLowerCase();
        
        // Exclude general navigation points and de-duplicate by ID
        if (!excludedIds.includes(idLower) && !uniqueLots.has(idLower)) {
          uniqueLots.set(idLower, {
            id: id,
            tilt: h.$.tilt || '',
            url: h.$.url || '',
            skinid: h.$.skinid || '',
            title: h.$.title || '',
            pan: h.$.pan || '',
            description: h.$.description || ''
          });
        }
      });

      return Array.from(uniqueLots.values());
    }
    return [];
  } catch (error) {
    console.error('Error reading initial hotspots from XML:', error);
    return [];
  }
};

// Startup synchronization function
const syncLotsOnStartup = async () => {
  try {
    // Query existing lots in database
    const { data: dbLots, error } = await supabase
      .from('lots')
      .select('*');

    if (error) {
      console.error('Error checking lots database status on startup:', error);
      return;
    }

    if (!dbLots || dbLots.length === 0) {
      console.log('Supabase lots table is empty. Performing one-time migration from pano.xml...');
      const xmlLots = await getAllHotspotsFromXML();

      if (xmlLots.length > 0) {
        const lotsToInsert = xmlLots.map(lot => ({
          id: lot.id,
          tilt: lot.tilt,
          url: lot.url,
          skinid: lot.skinid,
          title: lot.title,
          pan: lot.pan,
          description: lot.description
        }));

        const { error: insertError } = await supabase
          .from('lots')
          .insert(lotsToInsert);

        if (insertError) {
          console.error('Failed to migrate lots to Supabase:', insertError);
        } else {
          console.log(`Successfully migrated ${lotsToInsert.length} lots from pano.xml to Supabase.`);
        }
      } else {
        console.warn('No hotspots found in local pano.xml to migrate.');
      }
    } else {
      console.log(`Database has ${dbLots.length} lots. Syncing them to local pano.xml to ensure persistence...`);
      await syncDatabaseToXML(dbLots);
    }
  } catch (err) {
    console.error('Exception during startup lots synchronization:', err);
  }
};

const exportDataToJSON = async (filePath) => {
  try {
    const hotspots = await getAllHotspots();
    const jsonData = JSON.stringify(hotspots, null, 2);
    await fs.promises.writeFile(filePath, jsonData);
    console.log('Datos exportados correctamente desde la base de datos');
  } catch (error) {
    console.error('Error exportando datos:', error);
  }
};

const importDataFromJSON = async (filePath) => {
  try {
    const jsonData = await fs.promises.readFile(filePath, 'utf-8');
    const hotspots = JSON.parse(jsonData);

    for (const hotspot of hotspots) {
      await updateHotspotAttributes(hotspot.id, hotspot.description, hotspot.skinid, hotspot.url);
    }
    console.log('Datos importados correctamente a la base de datos y sincronizados');
  } catch (error) {
    console.error('Error importando datos:', error);
  }
};

// Generate updated XML on the fly without writing to disk
const generateDynamicXML = async () => {
  try {
    const result = await getData();
    const panorama = getMainPanorama(result);
    
    if (panorama && panorama.hotspots && panorama.hotspots[0].hotspot) {
      const hotspots = panorama.hotspots[0].hotspot;
      
      // Fetch latest lot values from Supabase
      const { data: dbLots, error } = await supabase
        .from('lots')
        .select('*');

      if (!error && dbLots && dbLots.length > 0) {
        // Map db values to template hotspots
        hotspots.forEach((hotspot) => {
          const id = hotspot.$.id || '';
          const dbLot = dbLots.find(l => l.id === id);
          if (dbLot) {
            hotspot.$.description = dbLot.description || '';
            hotspot.$.skinid = dbLot.skinid || '';
            hotspot.$.url = dbLot.url || '';
          }
        });
      }

      // Build updated XML string in memory
      const builder = new xml2js.Builder();
      return builder.buildObject(result);
    }
    
    // Return template raw file fallback if parsed object is empty
    return await fs.promises.readFile(xmlFilePath, 'utf-8');
  } catch (error) {
    console.error('Error generating dynamic XML:', error);
    throw error;
  }
};

module.exports = {
  updateHotspotAttributes,
  getAllHotspots, 
  exportDataToJSON,
  importDataFromJSON,
  syncLotsOnStartup,
  generateDynamicXML
};
