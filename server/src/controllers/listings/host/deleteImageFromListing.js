import listingsService from '../../../services/listings/index.js';

export const deleteImageFromListing = async (req, res) => {
  const { id, imageId } = req.params;

  await listingsService.deleteImageFromListing({ id, user: req.user, imageId });
  res.status(200).json({ message: 'Image deleted successfully' });
};
