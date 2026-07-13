const { Router } = require('express');
const { updateLot, getLots } = require('../controllers/admin.controller');
const {
  authenticateJWT,
  authorizeAdmin,
} = require('../middlewares/jwtValidator');

const router = Router();

// Public: Get list of lots for VR map & public price list modal
router.get('/', getLots);

// Private: Update lot details (Admin only)
router.put('/', [authenticateJWT, authorizeAdmin], updateLot);

module.exports = router;
