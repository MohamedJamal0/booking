import { useMutation, useQueryClient } from '@tanstack/react-query';
import { checkOut as checkOutApi } from '../services';
import toast from 'react-hot-toast';
import useUser from '../../../auth/hooks/useUser';
import { useSearchParams } from 'react-router-dom';

export default function useCheckOut() {
  const queryClient = useQueryClient();

  const [urlSearchParams] = useSearchParams();

  const {
    user: { hostId },
  } = useUser();

  const status = urlSearchParams.get('status');
  const page = urlSearchParams.get('page');

  const { mutate: checkOut, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) => checkOutApi(bookingId),

    onSuccess: (_, bookingId) => {
      queryClient.setQueryData(['bookings', status, page, hostId], (old) => {
        return old.filter((booking) => booking.id !== bookingId);
      });
      toast.success('Checked out successfully');
    },

    onError: () => {
      toast.error('something went wrong');
    },
  });

  return { checkOut, isCheckingOut };
}
