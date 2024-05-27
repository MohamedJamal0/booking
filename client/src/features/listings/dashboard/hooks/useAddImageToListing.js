import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { addImageToListing as addImageToListingApi } from '../services';
import toast from 'react-hot-toast';

export default function useAddImageToListing() {
  const queryClient = useQueryClient();
  const { listingId } = useParams();

  const { mutate: addImageToListing } = useMutation({
    mutationFn: (imageUrl) => addImageToListingApi({ id: listingId, imageUrl }),
    onSuccess: (newImage) => {
      console.log(newImage);
      queryClient.setQueryData(['listing', listingId], (old) => {
        return {
          ...old,
          images: [
            ...old.images,
            { id: newImage.id, imageUrl: newImage.imageUrl },
          ],
        };
      });
    },
    onError: () => {
      toast.error('Something went wrong. Please try again');
    },
  });

  return { addImageToListing };
}
