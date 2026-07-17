

const { supabase } = require('../database/supabase');
const {
  updateHotspotAttributes,
  getAllHotspots,
} = require('../helpers/modifyXML');

let cachedUF = null;
let lastFetch = 0;

const fetchUFValue = async () => {
  const now = Date.now();
  // Cache for 1 hour (3600000 ms)
  if (cachedUF && (now - lastFetch < 3600000)) {
    return cachedUF;
  }
  try {
    const res = await fetch('https://mindicador.cl/api/uf');
    const data = await res.json();
    if (data && data.serie && data.serie[0] && data.serie[0].valor) {
      cachedUF = data.serie[0].valor;
      lastFetch = now;
      console.log('Fetched UF rate from mindicador.cl:', cachedUF);
      return cachedUF;
    }
  } catch (err) {
    console.warn('Could not fetch UF rate from mindicador.cl, using fallback:', err.message);
  }
  return 38000; // Fallback value
};

const updateLot = async (req, res) => {
  const { lotId, description, status, newInfo } = req.body;

  if (!lotId) {
      return res.status(400).json({
          message: 'lotId is required',
      });
  }
  try {
      const error = await updateHotspotAttributes(lotId, description, status, newInfo);

      if (error) {
          return res.status(400).json({ message: error });
      }

      res.status(200).json({
          message: 'Lot updated',
      });
  } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error updating lot' });
  }
};

const getLots = async (req, res) => {
  try {
    const hotspots = await getAllHotspots();
    
    // Fetch currency configuration
    const { data: configData } = await supabase
      .from('lots')
      .select('*')
      .eq('id', 'CONFIG_CURRENCY')
      .single();

    const currency = configData ? configData.url : 'UF';
    const conversionRate = await fetchUFValue();
    
    res.status(200).json({ 
      hotspots, 
      currency, 
      conversionRate 
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getCurrency = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('lots')
      .select('*')
      .eq('id', 'CONFIG_CURRENCY')
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching currency settings:', error);
      return res.status(500).json({ message: 'Error retrieving currency' });
    }

    const currency = data ? data.url : 'UF';
    const conversionRate = await fetchUFValue();

    res.status(200).json({ currency, conversionRate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateCurrency = async (req, res) => {
  const { currency } = req.body;
  if (!currency) {
    return res.status(400).json({ message: 'currency is required' });
  }

  try {
    const { error } = await supabase
      .from('lots')
      .upsert({
        id: 'CONFIG_CURRENCY',
        url: currency,
        description: '38000',
        title: 'CONFIG_CURRENCY',
        skinid: '',
        pan: '',
        tilt: '',
        updated_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error saving currency to Supabase:', error);
      return res.status(400).json({ message: error.message });
    }

    const conversionRate = await fetchUFValue();
    res.status(200).json({ message: 'Currency updated successfully', currency, conversionRate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { 
  updateLot, 
  getLots,
  getCurrency,
  updateCurrency
};
