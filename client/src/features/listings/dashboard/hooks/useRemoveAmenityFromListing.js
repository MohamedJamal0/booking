import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { removeAmenityFromListing as removeAmenityFromListingApi } from '../services';
import toast from 'react-hot-toast';

export default function useRemoveAmenityFromListing() {
  const { listingId } = useParams();
  const queryClient = useQueryClient();

  const { mutate: removeAmenityFromListing } = useMutation({
    mutationFn: (amenityId) =>
      removeAmenityFromListingApi({ id: listingId, amenityId }),
    onMutate: async (amenityId) => {
      await queryClient.cancelQueries(['listing', listingId]);
      const previousListing = queryClient.getQueryData(['editListing']);

      queryClient.setQueryData(['listing', listingId], (old) => ({
        ...old,
        amenities: old.amenities.filter(
          (amenity) => amenity.amenity.id !== amenityId
        ),
      }));

      return { previousListing };
    },
    onError: (error, _, context) => {
      toast.error('Something went wrong. Please try again');
      queryClient.setQueryData(['listing', listingId], context.previousListing);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['editedListing', listingId] });
    },
  });

  return { removeAmenityFromListing };
}
