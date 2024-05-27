import reviewsService from '../../services/reviews/index.js';

export const createReview = async (req, res) => {
  const review = await reviewsService.createReview({
    user: req.user,
    review: req.body,
  });

  res.status(201).json(review);
};
