import listingsService from '../../../services/listings/index.js';

export const getListings = async (req, res) => {
  const listings = await listingsService.getListings(req.query);

  res.status(200).json(listings);
};
