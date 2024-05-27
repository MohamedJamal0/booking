import prisma from '../../../lib/prisma.js';
import { NotFoundError } from '../../../errors/index.js';

export const getHostListingById = async (id) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: +id,
    },
    select: {
      id: true,
      title: true,
      summary: true,
      pricePerNight: true,
      images: { select: { id: true, imageUrl: true } },
      amenities: { select: { amenity: { select: { id: true, name: true } } } },
      city: true,
      country: true,
      numberOfBathrooms: true,
      numberOfBeds: true,
      numberOfRooms: true,
      maxNumberOfGuests: true,
      minNumberOfNights: true,
      latitude: true,
      longitude: true,
      status: { select: { id: true, name: true } },
      category: { select: { id: true, name: true } },
      type: { select: { id: true, name: true } },
    },
  });

  if (!listing) {
    throw new NotFoundError('Listing not found');
  }
  return listing;
};
