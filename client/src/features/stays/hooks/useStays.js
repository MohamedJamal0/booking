import { useQuery } from '@tanstack/react-query';
import { getStays } from '../services';
import useUser from '../../auth/hooks/useUser';

export default function useStays(filter) {
  const {
    user: { hostId },
  } = useUser();
  const {
    data: stays,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['stays', filter, hostId],
    queryFn: () => getStays(filter),
    staleTime: 0,
  });

  return { stays, isLoading, error };
}
