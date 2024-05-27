import { BookingApi } from '../../../../services/apiBooking';

export async function getHostBookings({ status, page }) {
  const { data } = await BookingApi.get(`host/bookings`, {
    params: {
      status,
      page,
    },
  });

  return data;
}

export async function checkIn(bookingId) {
  await BookingApi.patch(`/bookings/${bookingId}/check-in`);
}

export async function checkOut(bookingId) {
  await BookingApi.patch(`/bookings/${bookingId}/check-out`);
}
