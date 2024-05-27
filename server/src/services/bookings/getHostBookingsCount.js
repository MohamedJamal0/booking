import prisma from '../../lib/prisma.js';

import {
  upcomingQuery,
  arrivingSoonQuery,
  currentHostQuery,
  checkedOutQuery,
} from '../../lib/utils.js';

export const getHostBookingsCount = async (user) => {
  const hostId = user.hostId;

  const numberOfUpcomingBookings = prisma.booking.count(upcomingQuery(hostId));

  const numberOfArrivingSoonBookings = prisma.booking.count(
    arrivingSoonQuery(hostId)
  );

  const numberOfCurrentHostBookings = prisma.booking.count(
    currentHostQuery(hostId)
  );

  const numberOfCheckedOutBookings = prisma.booking.count(
    checkedOutQuery(hostId)
  );

  const numberOfAllBookings = prisma.booking.count({
    where: {
      listing: { hostId: hostId },
      OR: [{ statusId: 1 }, { statusId: 2 }],
    },
  });

  const [
    numberOfUpcomingBookingsCount,
    numberOfArrivingSoonBookingsCount,
    numberOfCurrentHostBookingsCount,
    numberOfCheckedOutBookingsCount,
    numberOfAllBookingsCount,
  ] = await Promise.all([
    numberOfUpcomingBookings,
    numberOfArrivingSoonBookings,
    numberOfCurrentHostBookings,
    numberOfCheckedOutBookings,
    numberOfAllBookings,
  ]);

  return {
    numberOfUpcomingBookingsCount,
    numberOfArrivingSoonBookingsCount,
    numberOfCurrentHostBookingsCount,
    numberOfCheckedOutBookingsCount,
    numberOfAllBookingsCount,
  };
};
