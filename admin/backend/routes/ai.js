const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { authenticateJWT } = require('../middlewares/jwtValidator');
const AIController = require('../controllers/aiController');

const router = Router();

/**
 * @route   POST /api/ai/query
 * @desc    Process AI query for project data
 * @access  Private (requires JWT)
 */
router.post('/query', [
    authenticateJWT,
    check('query', 'Query is required').not().isEmpty(),
    check('query', 'Query must be a string').isString(),
    check('query', 'Query must be at least 3 characters').isLength({ min: 3 }),
    validateFields
], AIController.processQuery);

/**
 * @route   GET /api/ai/health
 * @desc    Check AI service health and model status
 * @access  Public
 */
router.get('/health', (req, res) => {
    const hasOpenAI = !!process.env.OPENAI_API_KEY;
    
    res.json({
        ok: true,
        message: 'AI Service is running',
        timestamp: new Date().toISOString(),
        version: '2.0.0',
        models: {
            openai: {
                available: hasOpenAI,
                model: hasOpenAI ? 'gpt-4o-mini' : null,
                status: hasOpenAI ? 'active' : 'not_configured'
            },
            local: {
                available: true,
                model: 'Astra360_IntelligentAssistant',
                status: 'active'
            }
        },
        activeModel: hasOpenAI ? 'openai' : 'local'
    });
});

module.exports = router;
