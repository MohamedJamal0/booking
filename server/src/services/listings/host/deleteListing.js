import prisma from '../../../lib/prisma.js';
import { NotFoundError } from '../../../errors/index.js';

export const deleteListing = async ({ id, user }) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: +id,
      hostId: user.hostId,
    },
  });

  if (!listing) {
    throw new NotFoundError('Listing not found');
  }

  await prisma.listing.delete({
    where: {
      id: +id,
    },
  });
};
