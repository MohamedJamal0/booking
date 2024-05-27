import { parseISO, differenceInDays } from 'date-fns';
import { startOfDay, endOfDay, addDays } from 'date-fns';

export const calculateNights = (checkIn, checkOut) => {
  return differenceInDays(checkOut, checkIn);
};

const today = new Date();
const tomorrow = addDays(today, 1);

export const upcomingQuery = (hostId) => ({
  where: {
    listing: { hostId: hostId },
    statusId: 1,
    checkIn: { gte: startOfDay(today) },
  },

  orderBy: { checkIn: 'asc' },
});

export const arrivingSoonQuery = (hostId) => ({
  where: {
    listing: { hostId: hostId },
    statusId: 1,
    checkIn: { gte: startOfDay(today), lte: endOfDay(tomorrow) },
  },
  orderBy: { checkIn: 'asc' },
});

export const currentHostQuery = (hostId) => ({
  where: { listing: { hostId: hostId }, statusId: 2 },
  orderBy: { checkOut: 'asc' },
});

export const checkedOutQuery = (hostId) => ({
  where: {
    listing: { hostId: hostId },
    statusId: 2,
    OR: [
      { checkOut: { gte: startOfDay(today), lte: endOfDay(today) } },
      { checkOut: { lt: startOfDay(today) } },
    ],
  },
  orderBy: { checkOut: 'asc' },
});
