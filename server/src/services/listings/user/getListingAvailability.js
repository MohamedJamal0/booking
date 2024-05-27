import { NotFoundError } from '../../../errors/index.js';
import prisma from '../../../lib/prisma.js';

export const getListingAvailability = async ({ id, startDate, endDate }) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: +id,
    },
  });

  if (!listing) throw new NotFoundError('listing not found');

  const booking = await prisma.booking.findMany({
    where: {
      listingId: +id,
      AND: [{ checkIn: { lte: startDate } }, { checkOut: { gte: endDate } }],
    },
  });

  return booking.length === 0;
};
