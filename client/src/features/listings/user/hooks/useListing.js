import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getListingInfo } from '../services';

export default function useListing() {
  const { listingId } = useParams();

  const { data: listing, isLoading } = useQuery({
    queryKey: ['listing', listingId],
    queryFn: () => getListingInfo(listingId),
  });

  return { listing, isLoading };
}
