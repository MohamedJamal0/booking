import listingsService from '../../../services/listings/index.js';

export const getHostListingById = async (req, res) => {
  const { id } = req.params;
  const listing = await listingsService.getHostListingById(id);
  res.status(200).json(listing);
};
