import { useQuery } from '@tanstack/react-query';
import { getListingTypes } from '../services';

export default function useListingTypes() {
  const { data, isLoading } = useQuery({
    queryKey: ['listingTypes'],
    queryFn: () => getListingTypes(),
  });

  return { types: data, isLoading };
}
