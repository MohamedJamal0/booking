import { createListing as createListingApi } from '../services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useUser from '../../../auth/hooks/useUser';
import toast from 'react-hot-toast';

export default function useCreateListing() {
  const queryClient = useQueryClient();
  const {
    user: { hostId },
  } = useUser();

  const { mutateAsync: createListing, isPending: isLoading } = useMutation({
    mutationFn: (listing) => createListingApi({ ...listing }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hostListings', hostId] });
    },
    onError: () => {
      toast.error('Something went wrong. Please try again.');
    },
  });

  return { createListing, isLoading };
}
