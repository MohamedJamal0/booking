import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteListing as deleteListingApi } from '../services';
import useUser from '../../../auth/hooks/useUser';
import toast from 'react-hot-toast';

export default function useDeleteListing() {
  const queryClient = useQueryClient();
  const {
    user: { hostId },
  } = useUser();

  const { mutateAsync: deleteListing, isPending: isLoading } = useMutation({
    mutationFn: (listingId) => deleteListingApi(listingId),
    onSuccess: (_, listingId) => {
      queryClient.setQueryData(['hostListings', hostId], (old) => {
        return old.filter((listing) => listing.id !== listingId);
      });
    },
    onError: () => {
      toast.error('Something went wrong. Please try again');
    },
  });

  return { deleteListing, isLoading };
}
