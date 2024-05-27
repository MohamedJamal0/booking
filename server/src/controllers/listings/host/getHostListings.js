import listingsService from '../../../services/listings/index.js';

export const getHostListings = async (req, res) => {
  const hostListings = await listingsService.getHostListings(req.user);

  res.status(200).json(hostListings);
};
