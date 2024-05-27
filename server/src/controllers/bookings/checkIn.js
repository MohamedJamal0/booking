import bookingsService from '../../services/bookings/index.js';

export const checkIn = async (req, res) => {
  const { id } = req.params;

  await bookingsService.checkIn({ bookingId: id, user: req.user });
  res.status(200).json({ message: 'Booking checked in successfully' });
};
