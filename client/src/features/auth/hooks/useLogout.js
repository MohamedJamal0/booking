import { useQueryClient, useMutation } from '@tanstack/react-query';
import { logout as logoutApi } from '../services';

export default function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(['user']);
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { logout };
}
