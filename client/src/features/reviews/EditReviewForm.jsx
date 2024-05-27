import { useState } from 'react';
import StarRating from '../../components/StarRating';
import useUpdateReview from './hooks/useUpdateReview';

export default function EditReviewForm({ onClose, review }) {
  const [rating, setRating] = useState(review?.rating || 0);
  const [comment, setComment] = useState(review?.comment || '');

  const { updateReview, isUpdating } = useUpdateReview();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment && !rating) return;

    await updateReview({
      id: review.id,
      review: { rating, comment: comment.trim() },
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <StarRating rating={rating} onChange={(rating) => setRating(rating)} />
      </div>
      <textarea
        name="comment"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="p-5 border mt-4 rounded-md border-black w-full "
      />

      <div className="flex justify-end mt-2">
        <button
          disabled={isUpdating || !comment || !rating}
          className=" px-2 py-1 rounded-md font-medium text-white bg-pink-500"
        >
          {isUpdating ? 'updating...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
