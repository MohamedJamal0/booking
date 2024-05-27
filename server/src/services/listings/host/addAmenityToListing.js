import { NotFoundError } from '../../../errors/index.js';
import prisma from '../../../lib/prisma.js';

export const addAmenityToListing = async ({ id, user, amenityId }) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: +id,
      hostId: user.hostId,
    },
  });

  if (!listing) {
    throw NotFoundError('Listing not found');
  }

  await prisma.amenityOnListing.create({
    data: {
      listingId: +id,
      amenityId: +amenityId,
    },
  });
};
