import prisma from '../../lib/prisma.js';

export const createBooking = async ({ userId, booking }) => {
  const {
    listingId,
    checkIn,
    checkOut,
    total,
    numberOfAdults,
    numberOfChildren,
    numberOfInfants,
  } = booking;

  const createdBooking = await prisma.booking.create({
    data: {
      userId,
      listingId,
      checkIn,
      checkOut,
      numberOfAdults,
      numberOfChildren,
      numberOfInfants,
      total,
    },
  });

  return createdBooking;
};
