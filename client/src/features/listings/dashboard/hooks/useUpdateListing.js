import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateListing as updateListingApi } from '../services';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function useUpdateListing() {
  const queryClient = useQueryClient();
  const { listingId } = useParams();

  const { mutate: updateListing, isPending: isLoading } = useMutation({
    mutationFn: (updatedData) =>
      updateListingApi({ id: listingId, listing: updatedData }),
    onSuccess: () => {
      queryClient.invalidateQueries(['listing', listingId]);
      toast.success('Listing updated successfully');
    },
    onError: () => {
      toast.error('Something went wrong. Please try again');
    },
  });

  return { updateListing, isLoading };
}
