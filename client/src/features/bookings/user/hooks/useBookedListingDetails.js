import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBookedListingDetails } from '../services/index';

import useSearchParamsFromUrl from '../../../../hooks/useListingSearchParams';

export default function useBookedListingDetails() {
  const { listingId } = useParams();

  const { endDate, startDate } = useSearchParamsFromUrl();

  const { data: bookedPlaceDetails, isLoading } = useQuery({
    queryKey: ['bookedPlaceDetails', listingId, startDate, endDate],
    queryFn: () => getBookedListingDetails(listingId),
  });

  return { bookedPlaceDetails, isLoading };
}
