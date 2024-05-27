import Stars from '../../components/Stars';

export default function ReviewItem({ review }) {
  console.log(review);
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
          {review.user.firstName[0].toUpperCase()}
        </div>

        <span className="font-medium">{`${review.user.firstName} ${review.user.lastName}`}</span>
      </div>
      <div className="mt-2">
        <Stars stars={review.rating} />
      </div>
      <p className="mt-2">{review.comment}</p>
    </div>
  );
}
