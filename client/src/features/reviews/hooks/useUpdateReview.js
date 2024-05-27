import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateReview as updateReviewApi } from '../services';
import { useSearchParams } from 'react-router-dom';

export default function useUpdateReview() {
  const queryClient = useQueryClient();

  const [urlSearchParams] = useSearchParams();

  const page = urlSearchParams.get('page') || 1;

  const { mutateAsync: updateReview, isPending: isUpdating } = useMutation({
    mutationFn: updateReviewApi,
    onSuccess: (updatedReview) => {
      queryClient.setQueryData(['trips', page], (old) =>
        old.map((booking) =>
          booking.id === updatedReview.bookingId
            ? {
                ...booking,
                review: {
                  id: updatedReview.id,
                  rating: updatedReview.rating,
                  comment: updatedReview.comment,
                },
              }
            : booking
        )
      );
    },
  });

  return { updateReview, isUpdating };
}
