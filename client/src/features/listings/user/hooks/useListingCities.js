import { useQuery } from '@tanstack/react-query';

import { getListingCities } from '../services';

export default function useListingCities(search) {
  const {
    data: cities,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cities', search],
    queryFn: () => getListingCities(search),
  });

  return { cities, isLoading, error };
}
