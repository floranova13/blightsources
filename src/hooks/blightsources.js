import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getPrices, getPrice, updatePrices } from '../utils/prices';

const fetchBlightsources = async () => {
  const response = await fetch(
    'https://blightsources-backend.herokuapp.com/api/blightsources'
  );
  const data = await response.json();
  return data;
};

const fetchBlightsource = async (blightsourceName) => {
  const response = await fetch(
    'https://blightsources-backend.herokuapp.com/api/blightsources'
  );
  const data = await response.json();
  return data;
};

export const useGetBlightsources = () => {
  return useQuery(['blightsources'], getPrices);
};

export const useGetBlightsource = (name) => {
  return useQuery(['blightsource', name.toLowerCase()], () => getPrice(name));
};

export const useUpdatePrices = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePrices, {
    onSuccess: () => {
      queryClient.refetchQueries('blightsources', 'blightsource');
    },
  });
};
