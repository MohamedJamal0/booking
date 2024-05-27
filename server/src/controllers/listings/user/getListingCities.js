import listingsService from '../../../services/listings/index.js';

export const getListingCities = async (req, res) => {
  const { search } = req.query;

  const cities = await listingsService.getListingCities(search);

  res.status(200).json(cities);
};
