import prisma from '../../../lib/prisma.js';
import { NotFoundError } from '../../../errors/index.js';

export const deleteImageFromListing = async ({ id, user, imageId }) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: +id,
      hostId: user.hostId,
    },
  });

  if (!listing) {
    throw NotFoundError('Listing not found');
  }
  console.log({ id, imageId });
  await prisma.listingImage.delete({
    where: { id: +imageId },
  });
};
