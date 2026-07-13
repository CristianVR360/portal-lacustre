const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

const isSecretKey = (req, res, next) => {
  const { secret_key = '' } = req.body;

  if (!secret_key) {
    return res.status(401).json({
      message: 'Secret key required',
    });
  }

  if (secret_key !== process.env.SECRET_KEY) {
    return res.status(401).json({
      message: 'Secret key does not match',
    });
  }

  next();
};

module.exports = { validateFields, isSecretKey };
