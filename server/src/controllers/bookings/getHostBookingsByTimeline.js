import bookingsService from '../../services/bookings/index.js';

export const getHostBookingsByTimeline = async (req, res) => {
  const { timeline } = req.query;
  const bookings = await bookingsService.getHostBookingsByTimeline({
    user: req.user,
    timeline,
  });
  res.status(200).json(bookings);
};
