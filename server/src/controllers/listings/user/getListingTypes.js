import listingsService from '../../../services/listings/index.js';

export const getListingTypes = async (req, res) => {
  const types = await listingsService.getListingTypes();
  res.status(200).json(types);
};
