import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createHost as createHostApi } from '../services';
import useUser from './useUser';
import toast from 'react-hot-toast';
import { handleAxiosError } from '../../../utils/helper';

export default function useCreateHost() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { mutateAsync: createHost, isPending: isLoading } = useMutation({
    mutationFn: createHostApi,

    onSuccess: async (host) => {
      queryClient.setQueryData(['user'], {
        ...user,
        ...host,
      });
    },

    onError: (error) => {
      toast.error(handleAxiosError(error).message);
    },
  });

  return { createHost, isLoading };
}
