import Joi from 'joi';

const createReviewSchema = Joi.object({
  listingId: Joi.number().integer().positive().required(),
  bookingId: Joi.number().integer().positive().required(),
  rating: Joi.number().integer().positive().required(),
  comment: Joi.string().required(),
});

const updateReviewSchema = Joi.object({
  rating: Joi.number().integer().positive().required(),
  comment: Joi.string().required(),
});

export default {
  createReviewSchema,
  updateReviewSchema,
};
