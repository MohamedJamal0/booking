import reviewsService from '../../services/reviews/index.js';

export const getReviewsByListingId = async (req, res) => {
  const { listingId, page, limit, sortBy } = req.query;

  const reviews = await reviewsService.getReviewsByListingId({
    listingId,
    page,
    limit,
    sortBy,
  });

  res.status(200).json(reviews);
};
