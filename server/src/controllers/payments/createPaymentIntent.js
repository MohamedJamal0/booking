import paymentsService from '../../services/payments/index.js';

export const createPaymentIntent = async (req, res) => {
  const paymentIntent = await paymentsService.createPaymentIntent({
    user: req.user,
    booking: req.body,
  });

  res.status(201).json({
    clientSecret: paymentIntent.client_secret,
  });
};
