import bookingsService from '../../services/bookings/index.js';

export const getUserBookings = async (req, res) => {
  const { page } = req.user;
  const bookings = await bookingsService.getUserBookings({
    user: req.user,
    page,
  });

  return res.status(200).json(bookings);
};
