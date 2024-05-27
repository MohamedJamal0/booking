import { BookingApi } from '../../../services/apiBooking';

export async function getPlaceReviews({ listingId, sortBy, page }) {
  const { data } = await BookingApi.get(`/reviews`, {
    params: {
      listingId,
      page,
      sortBy,
    },
  });

  return data;
}

export async function updateReview({ id, review }) {
  const { data } = await BookingApi.patch(`/reviews/${id}`, review);

  return data;
}

export async function createReview(review) {
  const { data } = await BookingApi.post('/reviews', review);

  return data;
}
