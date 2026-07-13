const { Router } = require('express');
const { check } = require('express-validator');
const { postUsers, putUsers } = require('../controllers/user.controller');

const { validateFields } = require('../middlewares/validate-fields');
const { isEmailDatabase, isValidRole } = require('../helpers/db-validators');
const { isSecretKey } = require('../middlewares/validate-fields');

const router = Router();

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password must be more than 6 letters').isLength({
      min: 6,
    }),
    check('email', 'Email not valid').isEmail(),
    check('email').custom(isEmailDatabase),
    check('role').custom(isValidRole),
  ],
  isSecretKey,
  validateFields,
  postUsers
);

router.put('/', isSecretKey, putUsers);

module.exports = router;
