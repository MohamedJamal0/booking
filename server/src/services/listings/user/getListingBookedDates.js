import prisma from '../../../lib/prisma.js';

export const getListingBookedDates = async (id) => {
  const bookings = await prisma.booking.findMany({
    where: {
      listingId: +id,
    },
    select: {
      checkIn: true,
      checkOut: true,
    },
  });
  return bookings;
};
