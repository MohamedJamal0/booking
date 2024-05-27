import { BookingApi } from '../../../../services/apiBooking';

export async function getHostListing(id) {
  const { data } = await BookingApi.get(`host/listings/${id}`);
  return data;
}

export async function getHostListings() {
  const { data } = await BookingApi.get(`host/listings`);
  return data;
}

export async function createListing(listing) {
  const { data } = await BookingApi.post(`listings`, listing);
  return data;
}

export async function updateListing({ id, listing }) {
  const { data } = await BookingApi.patch(`listings/${id}`, listing);
  return data;
}

export async function deleteListing(id) {
  await BookingApi.delete(`listings/${id}`);
}

export async function addImageToListing({ id, imageUrl }) {
  const { data } = await BookingApi.post(`listings/${id}/images`, {
    imageUrl,
  });

  return data;
}

export async function removeImageFromListing({ id, imageId }) {
  await BookingApi.delete(`listings/${id}/images/${imageId}`);
}

export async function addAmenityToListing({ id, amenityId }) {
  await BookingApi.post(`listings/${id}/amenities`, { amenityId });
}

export async function removeAmenityFromListing({ id, amenityId }) {
  await BookingApi.delete(`listings/${id}/amenities/${amenityId}`);
}
