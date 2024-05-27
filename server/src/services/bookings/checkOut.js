import prisma from '../../lib/prisma.js';

export const checkOut = async ({ bookingId, user }) => {
  const booking = await prisma.booking.findUnique({
    where: {
      id: +bookingId,
      listing: { hostId: user.hostId },
    },
  });

  if (!booking) throw new Error('Booking not found');

  await prisma.booking.update({
    where: { id: +bookingId },
    data: {
      statusId: 3,
    },
  });
};
