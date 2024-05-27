import { useQuery } from '@tanstack/react-query';
import { getHostListings } from '../services';
import useUser from '../../../auth/hooks/useUser';

export default function useHostListings() {
  const {
    user: { hostId },
  } = useUser();

  const { data: hostListings, isLoading } = useQuery({
    queryKey: ['hostListings', hostId],
    queryFn: () => getHostListings(),
  });

  return { hostListings, isLoading };
}
