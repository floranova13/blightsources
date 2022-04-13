import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getResources, getResource, updateResource } from '../utils/resources';

export const useGetResources = () => {
  return useQuery(['resources'], getResources);
};

export const useGetBlightsource = (name) => {
  return useQuery(['resource', name.toLowerCase()], () => getResource(name));
};

export const useUpdateResource = (r) => {
  const queryClient = useQueryClient();
  return useMutation(() => updateResource(r), {
    onSuccess: () => {
      queryClient.refetchQueries('resources', 'resource');
    },
  });
};
