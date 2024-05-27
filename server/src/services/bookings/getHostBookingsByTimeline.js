import prisma from '../../lib/prisma.js';

import {
  upcomingQuery,
  arrivingSoonQuery,
  currentHostQuery,
  checkedOutQuery,
} from '../../lib/utils.js';

export const getHostBookingsByTimeline = async ({ user, timeline }) => {
  const hostId = user.hostId;

  

  let prismaQuery;

  if (timeline === 'upcoming') {
    prismaQuery = upcomingQuery(hostId);
  }

  if (timeline === 'arriving-soon') {
    prismaQuery = arrivingSoonQuery(hostId);
  }

  if (timeline === 'current-host') {
    prismaQuery = currentHostQuery(hostId);
  }

  if (timeline === 'checked-out') {
    prismaQuery = checkedOutQuery(hostId);
  }

  const bookings = await prisma.booking.findMany({
    ...prismaQuery,
    select: {
      id: true,
      listing: { select: { title: true } },
      checkIn: true,
      checkOut: true,
      status: { select: { name: true } },
      user: { select: { firstName: true, lastName: true } },
      numberOfAdults: true,
      numberOfChildren: true,
      numberOfInfants: true,
    },
  });

  return bookings;
};
