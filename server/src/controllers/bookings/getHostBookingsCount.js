import bookingsService from '../../services/bookings/index.js';

export const getHostBookingsCount = async (req, res) => {
  const count = await bookingsService.getHostBookingsCount(req.user);
  res.status(200).json(count);
};
