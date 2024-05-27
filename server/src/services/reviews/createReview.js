import prisma from '../../lib/prisma.js';
import { NotFoundError } from '../../errors/index.js';

export const createReview = async ({ user, review }) => {
  const booking = await prisma.booking.findUnique({
    where: {
      id: review.bookingId,
      userId: user.id,
    },
  });

  if (!booking) throw new NotFoundError('Booking not found');

  const createdReview = await prisma.review.create({
    data: {
      ...review,
      userId: user.id,
    },
  });

  // calculate average rating
  const avgRating = await prisma.review.aggregate({
    where: {
      listingId: review.listingId,
    },
    _avg: {
      rating: true,
    },
  });

  // update listing average rating
  await prisma.listing.update({
    where: {
      id: booking.listingId,
    },
    data: {
      numberOfReviews: {
        increment: 1,
      },
      averageRating: avgRating._avg.rating,
    },
  });

  return createdReview;
};
