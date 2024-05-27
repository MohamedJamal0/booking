import prisma from '../../../lib/prisma.js';

export const updateListing = async ({ id, listing }) => {
  const updatedListed = await prisma.listing.update({
    where: {
      id: +id,
    },
    data: {
      ...listing,
    },
  });
  return updatedListed;
};
