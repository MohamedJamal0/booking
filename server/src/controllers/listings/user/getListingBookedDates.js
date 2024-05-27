import listingsService from '../../../services/listings/index.js';

export const getListingBookedDates = async (req, res) => {
  const { id } = req.params;
  const bookings = await listingsService.getListingBookedDates(id);
  res.status(200).json(bookings);
};
