import express from 'express';
import { validateBody } from '../../middleware/validator.js';

import authController from '../../controllers/auth/index.js';
import authValidation from '../../validations/auth/index.js';

import { cookieJwtAuth } from '../../middleware/auth.js';

const router = express.Router();

router.post(
  '/login',
  validateBody(authValidation.userLoginSchema),
  authController.login
);

router.post(
  '/signup',
  validateBody(authValidation.userSignUpSchema),
  authController.signup
);

router.post(
  '/host/signup',
  cookieJwtAuth,
  validateBody(authValidation.hostSignUpSchema),
  authController.hostSignup
);

router.get('/current-user', cookieJwtAuth, authController.getCurrentUser);

router.get('/logout', authController.logout);

export default router;
