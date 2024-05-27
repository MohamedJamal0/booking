import prisma from '../../../lib/prisma.js';

export const getListingCities = async (search) => {
  const cities = await prisma.listing.findMany({
    where: {
      OR: [
        {
          city: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          country: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ],
    },
    select: {
      city: true,
      country: true,
    },
    distinct: ['city', 'country'],

    take: 5,
  });

  return cities;
};
