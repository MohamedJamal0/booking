import prisma from '../../../lib/prisma.js';

export const getListingTypes = async () => {
  const types = await prisma.listingType.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return types;
};
