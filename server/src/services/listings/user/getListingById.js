import prisma from '../../../lib/prisma.js';
import { NotFoundError } from '../../../errors/index.js';

export const getListingById = async (id) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: +id,
    },
    select: {
      id: true,
      title: true,
      summary: true,
      pricePerNight: true,
      images: { select: { imageUrl: true } },
      amenities: { select: { amenity: { select: { name: true } } } },
      city: true,
      country: true,
      averageRating: true,
      numberOfReviews: true,
      numberOfBathrooms: true,
      numberOfBeds: true,
      numberOfRooms: true,
      maxNumberOfGuests: true,
      minNumberOfNights: true,
      latitude: true,
      longitude: true,
    },
  });

  if (!listing) {
    throw new NotFoundError('Listing not found');
  }

  return listing;
};
