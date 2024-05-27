import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { addAmenityToListing as addAmenityToListingApi } from '../services';
import { toast } from 'react-hot-toast';

export default function useAddAmenityToListing() {
  const { listingId } = useParams();
  const queryClient = useQueryClient();

  const { mutate: addAmenityToListing } = useMutation({
    mutationFn: (amenity) =>
      addAmenityToListingApi({ id: listingId, amenityId: amenity.id }),
    onMutate: async (amenity) => {
      console.log(amenity);
      await queryClient.cancelQueries(['listing', listingId]);

      const previousListing = queryClient.getQueryData(['listing', listingId]);

      queryClient.setQueryData(['listing', listingId], (old) => {
        return {
          ...old,
          amenities: [...old.amenities, { amenity: { ...amenity } }],
        };
      });

      return { previousListing };
    },
    onError: (error, _, context) => {
      toast.error('Something went wrong. Please try again');
      queryClient.setQueryData(['listing', listingId], context.previousListing);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['listing', listingId] });
    },
  });

  return { addAmenityToListing };
}
