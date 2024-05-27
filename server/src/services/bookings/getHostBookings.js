import  prisma  from '../../lib/prisma.js';

export const getHostBookings = async ({ user, status = 1, page = 1 }) => {
  const orderBy = {};

  if (status === 1) {
    orderBy.checkIn = 'asc';
  } else {
    orderBy.checkOut = 'asc';
  }

  const bookings = await prisma.booking.findMany({
    where: { listing: { hostId: user.hostId }, statusId: +status },
    select: {
      id: true,
      checkIn: true,
      checkOut: true,
      status: { select: { name: true } },
      listing: {
        select: {
          title: true,
        },
      },
      numberOfAdults: true,
      numberOfChildren: true,
      numberOfInfants: true,
      total: true,
      user: { select: { firstName: true, lastName: true } },
    },
    skip: (page - 1) * 10,
    take: 10,
    orderBy: status === 1 ? { checkIn: 'asc' } : { checkOut: 'asc' },
  });
  return bookings;
};
