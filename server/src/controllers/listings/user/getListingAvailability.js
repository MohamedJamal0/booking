import listingsService from '../../../services/listings/index.js';

export const getListingAvailability = async (req, res) => {
  const { startDate, endDate } = req.query;
  const { id } = req.params;

  const isAvailable = await listingsService.getListingAvailability({
    id,
    startDate,
    endDate,
  });
  res.status(200).json({ isAvailable });
};
