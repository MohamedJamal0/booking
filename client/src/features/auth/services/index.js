import { BookingApi } from '../../../services/apiBooking';

export async function getCurrentUser() {
  const { data } = await BookingApi.get('auth/current-user');

  return data;
}

export async function login({ email, password }) {
  const { data } = await BookingApi.post('auth/login', { email, password });
  return data;
}

export async function googleLogin() {
  // TODO: Implement google login
}

export async function signup({ email, password, firstName, lastName }) {
  const { data } = await BookingApi.post('auth/signup', {
    email,
    password,
    firstName,
    lastName,
  });

  return data;
}

export async function logout() {
  const { error } = await BookingApi.get('auth/logout');
  if (error) throw new Error(error.message);
}

export async function createHost(host) {
  const { mobileNumber, country, address, overview } = host;
  const { data } = await BookingApi.post('auth/host/signup', {
    mobileNumber,
    country,
    address,
    overview,
  });

  return data;
}
