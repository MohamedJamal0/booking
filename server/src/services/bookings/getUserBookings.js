import prisma from '../../lib/prisma.js';

export const getUserBookings = async ({ user, page = 1 }) => {
  const userBookings = await prisma.booking.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      checkIn: true,
      checkOut: true,
      status: { select: { name: true } },
      listing: {
        select: {
          id: true,
          title: true,
          images: { select: { imageUrl: true }, take: 1 },
          type: { select: { name: true } },
          city: true,
          country: true,
        },
      },

      review: { select: { id: true, rating: true, comment: true } },
    },
    orderBy: { checkIn: 'desc' },
    take: 5,
    skip: (+page - 1) * 5,
  });

  return userBookings;
};
