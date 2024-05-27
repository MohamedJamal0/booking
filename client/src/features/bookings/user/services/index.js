import { BookingApi } from '../../../../services/apiBooking';

export async function checkAvailability({ listingId, startDate, endDate }) {
  if (!startDate || !endDate || startDate === endDate) return false;

  const { data } = await BookingApi.get(`/listings/${listingId}/is-available`, {
    params: {
      startDate,
      endDate,
    },
  });

  return data;
}

export async function getListingBookedDates(listingId) {
  const { data } = await BookingApi.get(`/listings/${listingId}/booked-dates`);
  return data.map((d) => ({
    startDate: d.checkIn,
    endDate: d.checkOut,
  }));
}

export async function getBookedListingDetails(listingId) {
  const { data } = await BookingApi.get(
    `/listings/${listingId}/booked-details`
  );

  return data;
}

export async function createBookingIntentPayment(booking) {
  const { data } = await BookingApi.post(
    '/payments/create-payment-intent',
    booking
  );

  return data;
}

export async function getUserBookings(page) {
  const { data } = await BookingApi.get('/bookings', { params: { page } });
  return data;
}
