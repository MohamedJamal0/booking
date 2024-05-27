import prisma from '../../../lib/prisma.js';
import { NotFoundError } from '../../../errors/index.js';

export const deleteAmenityFromListing = async ({ id, user, amenityId }) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: +id,
      hostId: user.hostId,
    },
  });

  if (!listing) {
    throw NotFoundError('Listing not found');
  }

  await prisma.amenityOnListing.delete({
    where: { listingId_amenityId: { listingId: +id, amenityId: +amenityId } },
  });
};
