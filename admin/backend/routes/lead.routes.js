const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { authenticateJWT, authorizeAdmin } = require('../middlewares/jwtValidator');
const {
  createLead,
  getLeads,
  updateLeadStatus,
  deleteLead
} = require('../controllers/lead.controller');

const router = Router();

// Public: Submit a new contact form lead
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('phone', 'Phone is required').not().isEmpty(),
    validateFields
  ],
  createLead
);

// Private Admin: Get all leads
router.get('/admin', [authenticateJWT, authorizeAdmin], getLeads);

// Private Admin: Update status of a lead (e.g. mark as contacted/new)
router.put('/admin/:id', [authenticateJWT, authorizeAdmin], updateLeadStatus);

// Private Admin: Delete a lead
router.delete('/admin/:id', [authenticateJWT, authorizeAdmin], deleteLead);

module.exports = router;
