

const {
  updateHotspotAttributes,
  getAllHotspots,
 
} = require('../helpers/modifyXML');

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
  }
};


const getLots = async (req, res) => {
  try {
    const hotspots = await getAllHotspots();
    
    res.status(200).json({ hotspots });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' }); // Es bueno devolver una respuesta incluso en caso de error.
  }
};


module.exports = { updateLot, getLots };
