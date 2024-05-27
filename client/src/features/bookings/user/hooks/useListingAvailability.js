import { checkAvailability as checkAvailabilityApi } from '../services/index';
import { useQuery } from '@tanstack/react-query';

export default function useCheckAvailability({ listingId, startDate, endDate }) {
  const { data, isLoading } = useQuery({
    queryKey: ['availability', startDate, endDate, listingId],
    queryFn: () => checkAvailabilityApi({ listingId, startDate, endDate }),
  });

  return { isAvailable: data?.isAvailable, isLoading };
}
