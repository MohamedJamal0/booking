import listingsService from '../../../services/listings/index.js';

export const deleteAmenityFromListing = async (req, res) => {
  const { id, amenityId } = req.params;
  await listingsService.deleteAmenityFromListing({
    id,
    user: req.user,
    amenityId,
  });
  res.status(200).json({ message: 'Amenity deleted successfully' });
};
