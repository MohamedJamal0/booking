import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview as createReviewApi } from '../services';
import { useSearchParams } from 'react-router-dom';

export default function useCreateReview() {
  const queryClient = useQueryClient();

  const [urlSearchParams] = useSearchParams();

  const page = urlSearchParams.get('page') || 1;

  const { mutateAsync: createReview, isPending: isCreating } = useMutation({
    mutationFn: createReviewApi,
    onSuccess: (createdReview) => {
      queryClient.setQueryData(['trips', page], (old) =>
        old.map((booking) =>
          booking.id === createdReview.bookingId
            ? {
                ...booking,
                review: {
                  id: createdReview.id,
                  rating: createdReview.rating,
                  comment: createdReview.comment,
                },
              }
            : booking
        )
      );
    },
  });

  return { createReview, isCreating };
}
