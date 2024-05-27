import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { removeImageFromListing as removeImageFromListingApi } from '../services';
import toast from 'react-hot-toast';

export default function useRemoveImageFromListing() {
  const queryClient = useQueryClient();
  const { listingId } = useParams();

  const { mutate: removeImageFromListing, isPending: isRemovingImage } =
    useMutation({
      mutationFn: (imageId) =>
        removeImageFromListingApi({ id: listingId, imageId }),
      onSuccess: (_, imageId) => {
        console.log(imageId);
        queryClient.setQueryData(['listing', listingId], (old) => {
          return {
            ...old,
            images: old.images.filter((image) => image.id !== imageId),
          };
        });
      },
      onError: () => {
        toast.error('Something went wrong. Please try again');
      },
    });

  return { removeImageFromListing, isRemovingImage };
}
