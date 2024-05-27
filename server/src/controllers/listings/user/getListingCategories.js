import listingsService from '../../../services/listings/index.js';

export const getListingCategories = async (req, res) => {
  const categories = await listingsService.getListingCategories();
  res.status(200).json(categories);
};
