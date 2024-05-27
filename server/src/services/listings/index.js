import { getListings } from './user/getListings.js';
import { getListingById } from './user/getListingById.js';
import { getListingBookedDates } from './user/getListingBookedDates.js';
import { getBookedListingDetails } from './user/getBookedListingDetails.js';
import { getListingAvailability } from './user/getListingAvailability.js';

import { getHostListings } from './host/getHostListings.js';
import { getHostListingById } from './host/getHostListingById.js';
import { createListing } from './host/createListing.js';
import { updateListing } from './host/updateListing.js';
import { deleteListing } from './host/deleteListing.js';
import { addAmenityToListing } from './host/addAmenityToListing.js';
import { addImageToListing } from './host/addImageToListing.js';
import { deleteImageFromListing } from './host/deleteImageFromListing.js';
import { deleteAmenityFromListing } from './host/deleteAmenityFromListing.js';

import { getListingCategories } from './user/getListingCategories.js';
import { getListingTypes } from './user/getListingTypes.js';
import { getListingAmenities } from './user/getListingAmenities.js';
import { getListingCities } from './user/getListingCities.js';

export default {
  getListings,
  getHostListings,
  getListingById,
  getHostListingById,
  getListingBookedDates,
  getBookedListingDetails,
  getListingCategories,
  getListingTypes,
  getListingAmenities,
  getListingAvailability,
  getListingCities,
  createListing,
  updateListing,
  deleteListing,
  addAmenityToListing,
  addImageToListing,
  deleteImageFromListing,
  deleteAmenityFromListing,
};
