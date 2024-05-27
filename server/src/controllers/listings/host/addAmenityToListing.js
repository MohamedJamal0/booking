import listingsService from '../../../services/listings/index.js';

export const addAmenityToListing = async (req, res) => {
  const { id } = req.params;
  const { amenityId } = req.body;
  await listingsService.addAmenityToListing({ id, user: req.user, amenityId });
  res.status(201).json({ message: 'Amenity added successfully' });
};
