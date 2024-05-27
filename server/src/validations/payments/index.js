import Joi from 'joi';

const createPaymentIntentSchema = Joi.object({
  listingId: Joi.number().integer().positive().required(),

  checkIn: Joi.date().required(),
  checkOut: Joi.date().min(Joi.ref('checkIn')).required(),
  numberOfAdults: Joi.number().integer().min(1).required(),
  numberOfInfants: Joi.number().integer().min(0),
  numberOfChildren: Joi.number().integer().min(0),
});

export default { createPaymentIntentSchema };
