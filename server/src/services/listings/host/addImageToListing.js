import prisma from '../../../lib/prisma.js';
import { NotFoundError } from '../../../errors/index.js';

export const addImageToListing = async ({ id, user, imageUrl }) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: +id,
      hostId: user.hostId,
    },
  });

  if (!listing) {
    throw NotFoundError('Listing not found');
  }

  const image = await prisma.listingImage.create({
    data: {
      listingId: +id,
      imageUrl,
    },
  });

  return image;
};
