import express from 'express';

import { cookieJwtAuth } from '../../middleware/auth.js';

import { validateBody } from '../../middleware/validator.js';

import paymentsController from '../../controllers/payments/index.js';
import paymentsValidation from '../../validations/payments/index.js';

const router = express.Router();

router.post(
  '/create-payment-intent',
  cookieJwtAuth,
  validateBody(paymentsValidation.createPaymentIntentSchema),
  paymentsController.createPaymentIntent
);

export default router;
