import prisma from '../../../lib/prisma.js';
import { NotFoundError } from '../../../errors/index.js';

export const getBookedListingDetails = async (id) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: +id,
    },
    select: {
      id: true,
      title: true,
      type: { select: { name: true } },
      pricePerNight: true,
      images: { select: { imageUrl: true }, take: 1 },
      maxNumberOfGuests: true,
      minNumberOfNights: true,
      numberOfReviews: true,
      averageRating: true,
    },
  });

  if (!listing) {
    throw new NotFoundError('Listing not found');
  }

  return listing;
};
