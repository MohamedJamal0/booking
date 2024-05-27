import { BookingApi } from '../../../services/apiBooking';

export async function getStays(query) {
  const { data } = await BookingApi.get(`host/bookings/timeline`, {
    params: { timeline: query },
  });

  return data;
}

export async function getStaysCounts() {
  const { data } = await BookingApi.get(`host/bookings/timeline/counts`);
  return data;
}
