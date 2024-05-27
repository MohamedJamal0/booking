import { useQuery } from '@tanstack/react-query';
import { getListingAmenities } from '../services';
export default function useListingAmenities() {
  const { data, isLoading } = useQuery({
    queryKey: ['listingAmenities'],
    queryFn: () => getListingAmenities(),
  });

  return { amenities: data, isLoading };
}
