import express from 'express';

import { cookieJwtAuth, isHost } from '../../middleware/auth.js';

import listingsController from '../../controllers/listings/index.js';
import bookingsController from '../../controllers/bookings/index.js';

const router = express.Router();

router.get(
  '/listings',
  cookieJwtAuth,
  isHost,
  listingsController.getHostListings
);

router.get(
  '/listings/:id',
  cookieJwtAuth,
  isHost,
  listingsController.getHostListingById
);

router.get(
  '/bookings',
  cookieJwtAuth,
  isHost,
  bookingsController.getHostBookings
);

router.get(
  '/bookings/timeline',
  cookieJwtAuth,
  isHost,
  bookingsController.getHostBookingsByTimeline
);

router.get(
  '/bookings/timeline/counts',
  cookieJwtAuth,
  isHost,
  bookingsController.getHostBookingsCount
);

export default router;
