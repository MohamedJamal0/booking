import bookingsService from '../../services/bookings/index.js';

export const getHostBookings = async (req, res) => {
  const { status, page } = req.query;
  const bookings = await bookingsService.getHostBookings({
    user: req.user,
    status,
    page,
  });
  res.status(200).json(bookings);
};
