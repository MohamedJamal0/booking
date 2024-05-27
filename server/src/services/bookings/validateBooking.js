import prisma from '../../lib/prisma.js';
import { NotFoundError, BookingValidationError } from '../../errors/index.js';
import { calculateNights } from '../../lib/utils.js';

import listingsService from '../../services/listings/index.js';

export const validateBooking = async ({ listingId, booking }) => {
  const {
    checkIn,
    checkOut,
    numberOfAdults,
    numberOfInfants,
    numberOfChildren,
  } = booking;

  const listing = await prisma.listing.findUnique({
    where: {
      id: listingId,
    },
  });

  if (!listing) {
    throw new NotFoundError('Listing not found');
  }

  const isAvailable = await listingsService.getListingAvailability({
    id: listingId,
    startDate: checkIn,
    endDate: checkOut,
  });

  if (!isAvailable) {
    throw new BookingValidationError(
      `Listing is not available between ${checkIn} and ${checkOut}`
    );
  }

  const totalNumberOfGuests =
    numberOfAdults + numberOfInfants + numberOfChildren;

  if (totalNumberOfGuests > listing.maxNumberOfGuests) {
    throw new BookingValidationError(
      `Maximum number of guests allowed is ${listing.maxNumberOfGuests}`
    );
  }

  const totalNumberOfNights = calculateNights(checkIn, checkOut);

  if (totalNumberOfNights < listing.minNumberOfNights) {
    throw new BookingValidationError(
      `Minimum number of nights allowed is ${listing.minNumberOfNights}`
    );
  }

  const totalPrice = totalNumberOfNights * listing.pricePerNight;

  return totalPrice;
};
