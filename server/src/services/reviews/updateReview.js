import prisma from '../../lib/prisma.js';

export const updateReview = async ({ id, user, review }) => {
  const updatedReview = await prisma.review.update({
    where: {
      id: +id,
      userId: user.id,
    },
    data: {
      ...review,
    },
  });

  const avgRating = await prisma.review.aggregate({
    where: {
      listingId: updatedReview.listingId,
    },
    _avg: {
      rating: true,
    },
  });

  // update listing average rating
  await prisma.listing.update({
    where: {
      id: updatedReview.listingId,
    },
    data: {
      averageRating: avgRating._avg.rating,
    },
  });

  return updatedReview;
};
