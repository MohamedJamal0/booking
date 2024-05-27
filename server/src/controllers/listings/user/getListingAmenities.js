import listingsService from '../../../services/listings/index.js';

export const getListingAmenities = async (req, res) => {
  const amenities = await listingsService.getListingAmenities();
  res.status(200).json(amenities);
};
