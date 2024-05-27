import { getCurrentUser } from '../services';
import { useQuery } from '@tanstack/react-query';

export default function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    retry: 1,
  });

  return { user, isLoading };
}
