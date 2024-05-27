import { useQuery } from '@tanstack/react-query';
import { getUserBookings } from '../services';
import { useSearchParams } from 'react-router-dom';

export default function useUserBookings() {
  const [urlSearchParams] = useSearchParams();

  const page = urlSearchParams.get('page') || 1;

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['trips', page],
    queryFn: () => getUserBookings(page),
  });

  return { bookings, isLoading };
}
