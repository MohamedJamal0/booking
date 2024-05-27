import listingsService from '../../../services/listings/index.js';

export const getListingById = async (req, res) => {
  const { id } = req.params;
  const listing = await listingsService.getListingById(id);
  res.status(200).json(listing);
};
