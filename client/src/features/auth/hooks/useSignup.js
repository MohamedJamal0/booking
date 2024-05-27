import { useQueryClient, useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../services';
import { handleAxiosError } from '../../../utils/helper';

export default function useSignup() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: signup,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (user) => signupApi(user),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
    },
  });

  let signUpError;
  if (error) {
    signUpError = handleAxiosError(error);
  }

  return { signup, isLoading, error: signUpError };
}
