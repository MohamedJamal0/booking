import express from 'express';
import { cookieJwtAuth, isHost } from '../../middleware/auth.js';

import bookingsController from '../../controllers/bookings/index.js';

import { validateQuery } from '../../middleware/validator.js';

const router = express.Router();

router.get('/', cookieJwtAuth, bookingsController.getUserBookings);

router.patch(
  '/:id/check-in',
  cookieJwtAuth,
  isHost,
  bookingsController.checkIn
);

router.patch(
  '/:id/check-out',
  cookieJwtAuth,
  isHost,
  bookingsController.checkOut
);

export default router;
