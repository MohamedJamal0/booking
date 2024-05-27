import stripe from '../../lib/stripe.js';
import bookingsService from '../bookings/index.js';

export const createPaymentIntent = async ({ user, booking }) => {
  const totalPrice = await bookingsService.validateBooking({
    listingId: +booking.listingId,
    booking,
  });

  const bookingMetadata = JSON.stringify(booking);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice * 100,
    currency: 'usd',
    metadata: {
      userId: user.id,
      booking: bookingMetadata,
    },
  });

  return paymentIntent;
};
