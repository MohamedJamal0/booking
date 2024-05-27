import listingsService from '../../../services/listings/index.js';

export const createListing = async (req, res) => {
  const createdListing = await listingsService.createListing({
    user: req.user,
    listing: req.body,
  });
  res.status(201).json(createdListing);
};
