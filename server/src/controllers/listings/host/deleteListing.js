import listingsService from '../../../services/listings/index.js';

export const deleteListing = async (req, res) => {
  const { id } = req.params;
  await listingsService.deleteListing({ id, user: req.user });
  res.status(200).json({ msg: 'Listing deleted successfully' });
};
