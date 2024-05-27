import prisma from '../../../lib/prisma.js';

export const getListingCategories = async () => {
  const categories = await prisma.listingCategory.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return categories;
};
