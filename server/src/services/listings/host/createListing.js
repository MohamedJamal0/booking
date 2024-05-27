import prisma from '../../../lib/prisma.js';

export const createListing = async ({ user, listing }) => {
  const createdListing = await prisma.listing.create({
    data: {
      hostId: user.hostId,
      ...listing,
    },
  });
  return createdListing;
};
