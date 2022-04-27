import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getResources, getResource, updateResource } from '../utils/resources';

const getBlightsources = () => {
  const blightsources = localStorage.getItem('blightsources');
  return blightsources;
};

export const useResources = async () => {
  return useQuery(['resources'], getBlightsources());
};

const makeTransaction = (resources, transaction) => {

} 

export const useMarket = async (transaction) => {
  const { blightsourceName, count } = transaction;
  const blightsources = localStorage.getItem('blightsources');

  const queryClient = useQueryClient();

  return useMutation(() => makeTransaction(transaction), {
    onSuccess: () => {
      queryClient.refetchQueries('resources');
    },
  });
};
