import prisma from '../../../lib/prisma.js';

export const getListings = async (query) => {
  const {
    minPrice,
    maxPrice,
    categoryId,
    typeId,
    amenities,
    city = '',
    startDate,
    endDate,
    maxNumberOfGuests,
    minNumberOfNights,
    page = 1,
  } = query;

  const listings = await prisma.listing.findMany({
    select: {
      id: true,
      title: true,
      pricePerNight: true,
      images: { select: { imageUrl: true } },
      city: true,
      country: true,
      averageRating: true,
    },
    where: {
      amenities: {
        some: {
          amenityId: {
            in: amenities,
          },
        },
      },
      categoryId: categoryId,
      typeId: typeId,
      OR: [
        { city: { contains: city, mode: 'insensitive' } },
        { country: { contains: city, mode: 'insensitive' } },
      ],
      pricePerNight: {
        gte: minPrice,
        lte: maxPrice,
      },
      minNumberOfNights: {
        lte: minNumberOfNights,
      },
      maxNumberOfGuests: {
        gte: maxNumberOfGuests,
      },

      bookings: {
        none:
          startDate && endDate
            ? {
                AND: [
                  { checkIn: { lte: endDate } },
                  { checkOut: { gte: startDate } },
                  { OR: [{ statusId: 1 }, { statusId: 2 }] },
                ],
              }
            : undefined,
      },
    },

    skip: (+page - 1) * 20,
    take: 20,
  });

  return listings;
};
