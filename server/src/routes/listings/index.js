import express from 'express';
import { cookieJwtAuth, isHost } from '../../middleware/auth.js';
import { validateBody, validateQuery } from '../../middleware/validator.js';

import listingsController from '../../controllers/listings/index.js';
import listingsValidation from '../../validations/listings/index.js';

const router = express.Router();

router.get('/categories', listingsController.getListingCategories);
router.get('/types', listingsController.getListingTypes);
router.get('/amenities', listingsController.getListingAmenities);
router.get('/cities', listingsController.getListingCities);

router.post(
  '/',
  cookieJwtAuth,
  isHost,
  validateBody(listingsValidation.createListingSchema),
  listingsController.createListing
);

router.patch(
  '/:id',
  cookieJwtAuth,
  validateBody(listingsValidation.updateListingSchema),
  isHost,
  listingsController.updateListing
);

router.delete('/:id', cookieJwtAuth, isHost, listingsController.deleteListing);

router.post(
  '/:id/images',
  cookieJwtAuth,
  isHost,
  validateBody(listingsValidation.addImageToListingSchema),
  listingsController.addImageToListing
);

router.delete(
  '/:id/images/:imageId',
  cookieJwtAuth,
  isHost,
  listingsController.deleteImageFromListing
);

router.post(
  '/:id/amenities',
  cookieJwtAuth,
  isHost,
  validateBody(listingsValidation.addAmenityToListingSchema),
  listingsController.addAmenityToListing
);

router.delete(
  '/:id/amenities/:amenityId',
  cookieJwtAuth,
  isHost,
  listingsController.deleteAmenityFromListing
);

router.get(
  '/',
  validateQuery(listingsValidation.getListingsSchema),
  listingsController.getListings
);

router.get('/:id', listingsController.getListingById);

router.get(
  '/:id/is-available',
  validateQuery(listingsValidation.getListingAvailabilitySchema),
  listingsController.getListingAvailability
);

router.get('/:id/booked-dates', listingsController.getListingBookedDates);
router.get('/:id/booked-details', listingsController.getBookedListingDetails);

export default router;
