import prisma from '../../lib/prisma.js';

export const getReviewsByListingId = async ({
  listingId,
  page = 1,
  limit = 10,
  sortBy = 'newest',
}) => {
  const reviews = await prisma.review.findMany({
    where: {
      listingId: +listingId,
    },
    select: {
      id: true,
      comment: true,
      rating: true,
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
      createdAt: true,
    },
    take: +limit,
    skip: +limit * (+page - 1),
    orderBy: sortBy === 'newest' ? { createdAt: 'desc' } : { rating: 'desc' },
  });

  return reviews;
};
