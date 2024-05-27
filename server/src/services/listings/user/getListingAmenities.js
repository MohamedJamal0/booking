import prisma from '../../../lib/prisma.js';

export const getListingAmenities = async () => {
  const amenities = await prisma.amenity.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return amenities;
};
