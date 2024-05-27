import axios from 'axios';

export const BookingApi = axios.create({
  baseURL: import.meta.env.VITE_BOOKING_API_URL,
  withCredentials: true,
});
