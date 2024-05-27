import { useQuery } from '@tanstack/react-query';
import { getListingCategories } from '../services';
export default function useListingCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ['listingCategories'],
    queryFn: () => getListingCategories(),
  });

  return { categories: data, isLoading };
}
