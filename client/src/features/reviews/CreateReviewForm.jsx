import { useState } from 'react';
import StarRating from '../../components/StarRating';
import useCreateReview from './hooks/useCreateReview';

export default function CreateReviewForm({ onClose, bookingId, listingId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const { createReview, isCreating } = useCreateReview();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment && !rating) return;
    await createReview({
      rating,
      comment: comment.trim(),
      bookingId,
      listingId,
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
          disabled={isCreating || !comment || !rating}
          className=" px-2 py-1 rounded-md font-medium text-white bg-pink-500"
        >
          {isCreating ? 'Creating...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
