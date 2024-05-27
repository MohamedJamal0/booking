import listingsService from '../../../services/listings/index.js';

export const getBookedListingDetails = async (req, res) => {
  const { id } = req.params;

  const listing = await listingsService.getBookedListingDetails(id);

  return res.status(200).json(listing);
};
