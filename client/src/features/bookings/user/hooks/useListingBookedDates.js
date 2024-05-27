import { useQuery } from '@tanstack/react-query';

import { getListingBookedDates } from '../services/index';
import { useParams } from 'react-router-dom';

export default function useListingBookedDates() {
  const { listingId } = useParams();
  const { data: placeBookedDates, isLoading } = useQuery({
    queryKey: ['hostPlaces'],
    queryFn: () => getListingBookedDates(listingId),
  });

  return { placeBookedDates, isLoading };
}
