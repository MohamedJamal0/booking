import express from 'express';

import { cookieJwtAuth } from '../../middleware/auth.js';
import { validateBody } from '../../middleware/validator.js';

import reviewsController from '../../controllers/reviews/index.js';
import reviewsValidations from '../../validations/reviews/index.js';

const router = express.Router();

router.get('/', reviewsController.getReviewsByListingId);

router.post(
  '/',
  cookieJwtAuth,
  validateBody(reviewsValidations.createReviewSchema),
  reviewsController.createReview
);

router.patch(
  '/:id',
  cookieJwtAuth,
  validateBody(reviewsValidations.updateReviewSchema),
  reviewsController.updateReview
);

export default router;
