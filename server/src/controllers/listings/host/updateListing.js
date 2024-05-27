import listingsService from '../../../services/listings/index.js';

export const updateListing = async (req, res) => {
  const { id } = req.params;
  const updatedListing = await listingsService.updateListing({
    id,
    listing: req.body,
  });
  res.status(200).json(updatedListing);
};
