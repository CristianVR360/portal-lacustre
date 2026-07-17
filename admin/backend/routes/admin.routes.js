const { Router } = require('express');
const { updateLot, getLots, getCurrency, updateCurrency } = require('../controllers/admin.controller');
const {
  authenticateJWT,
  authorizeAdmin,
} = require('../middlewares/jwtValidator');

const router = Router();

// Public: Get list of lots for VR map & public price list modal
router.get('/', getLots);

// Private: Update lot details (Admin only)
router.put('/', [authenticateJWT, authorizeAdmin], updateLot);

// Public: Get project currency and conversion rate
router.get('/currency', getCurrency);

// Private: Update project currency settings
router.put('/currency', [authenticateJWT, authorizeAdmin], updateCurrency);

module.exports = router;
