import { BookingApi } from '../../../../services/apiBooking';

export async function getListings(filterParams) {
  const { data: places } = await BookingApi.get('listings', {
    params: filterParams,
  });

  return places;
}

export async function getListingInfo(listingId) {
  const { data } = await BookingApi.get(`listings/${listingId}`);
  return data;
}

export async function getListingCategories() {
  const { data: categories } = await BookingApi.get('listings/categories');
  return categories;
}

export async function getListingAmenities() {
  const { data: amenities } = await BookingApi.get('listings/amenities');
  return amenities;
}

export async function getListingTypes() {
  const { data: amenities } = await BookingApi.get('listings/types');
  return amenities;
}

export async function getListingCities(search) {
  const { data: cities } = await BookingApi.get('listings/cities', {
    params: { search },
  });
  return cities;
}
