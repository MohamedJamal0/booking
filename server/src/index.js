import dotenv from 'dotenv';
import 'express-async-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import rateLimiter from 'express-rate-limit';
import helmet from 'helmet';
import xss from 'xss-clean';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import prisma from './lib/prisma.js';

import authRoute from './routes/auth/index.js';
import hostRoute from './routes/host/index.js';
import listingsRoute from './routes/listings/index.js';
import bookingsRoute from './routes/bookings/index.js';
import reviewsRoute from './routes/reviews/index.js';
import paymentsRoute from './routes/payments/index.js';
import stripeWebhooksRoute from './routes/stripe/index.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300, // limit each IP to 300 requests per windowMs
  })
);

app.use(helmet());
app.use(xss());

app.use(
  '/api/v1/webhooks/stripe',
  express.raw({ type: 'application/json' }),
  stripeWebhooksRoute
);

app.use(express.json());

app.use(cookieParser());

// routes

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/host', hostRoute);
app.use('/api/v1/listings', listingsRoute);
app.use('/api/v1/bookings', bookingsRoute);
app.use('/api/v1/reviews', reviewsRoute);
app.use('/api/v1/payments', paymentsRoute);

// errors
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await prisma.$connect();
    app.listen(process.env.PORT, () =>
      console.log(`Server is listening on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
