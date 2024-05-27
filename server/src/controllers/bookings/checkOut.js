import bookingsService from '../../services/bookings/index.js';

export const checkOut = async (req, res) => {
  const { id } = req.params;
  await bookingsService.checkOut({ bookingId: id, user: req.user });
  res.status(200).json({ message: 'Booking checked out successfully' });
};
