import express from 'express';
import stripe from '../../lib/stripe.js';
import bookingService from '../../services/bookings/index.js';
import { BadRequestError } from '../../errors/index.js';

const router = express.Router();
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

router.post('/', async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    throw new BadRequestError('Webhook signature verification failed.');
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const { userId, booking } = paymentIntent.metadata;

    const parsedBooking = JSON.parse(booking);

    try {
      await bookingService.createBooking({
        userId: +userId,
        booking: { ...parsedBooking, total: paymentIntent.amount / 100 },
      });
    } catch (err) {
      // TODO: Handle error in a better way

      console.log(err);

      throw new Error('Error creating booking');
    }
  }

  res.status(200).json({ received: true });
});

export default router;
