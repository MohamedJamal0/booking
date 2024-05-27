import reviewsService from '../../services/reviews/index.js';

export const updateReview = async (req, res) => {
  const review = await reviewsService.updateReview({
    id: +req.params.id,
    user: req.user,
    review: req.body,
  });

  res.status(201).json(review);
};
