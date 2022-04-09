import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getPrices, getPrice, updatePrices } from '../utils/prices';

export const useGetBlightsources = () => {
  return useQuery(['blightsources'], getPrices);
};

export const useGetBlightsource = (name) => {
  return useQuery(['blightsource', name], () => getPrice(name));
};

export const useUpdatePrices = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePrices, {
    onSuccess: () => {
      queryClient.refetchQueries('blightsources', 'blightsource');
    },
  });
};
