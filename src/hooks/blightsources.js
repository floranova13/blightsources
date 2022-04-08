import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getPrices, getPrice, updatePrices } from '../utils/prices';

const getNewBlightsourcePrice = async (price) => {
  let maxMult = 1.2;
  let minMult = 0.8;
  const { basePrice, priceHistory } = price;
  const newCurrentPrice = Math.round(
    (Math.random() * (maxMult - minMult) + minMult) * basePrice
  );

  console.log('before', [...priceHistory]);
  console.log('after', [...priceHistory, newCurrentPrice]);

  return {
    basePrice,
    currentPrice: newCurrentPrice,
    priceHistory: [...priceHistory, newCurrentPrice],
  };
};

const updateBlightsourcePrice = async (category, subcategory, name) => {
  const price = await getBlightsource(category, subcategory, name);
  const data = await getNewBlightsourcePrice(price);
  getPrices()[category][subcategory][name] = data;

  return data;
};

const getBlightsource = async (category, subcategory, name) => {
  const data = getPrice(category, subcategory, name);

  return data;
};

export function useUpdateBlightsource(category, subcategory, name) {
  const queryClient = useQueryClient();

  return useMutation(
    (category, subcategory, name) =>
      updateBlightsourcePrice(category, subcategory, name),
    {
      onSuccess: (price) => {
        queryClient.setQueryData(
          ['blightsource', { category, subcategory, name }],
          price
        );
      },
    }
  );
}

export const updateAllBlightsources = async () => {
  for (const category of Object.keys(getPrices())) {
    for (const subcategory of Object.keys(getPrices()[category])) {
      for (const name of Object.keys(getPrices()[category][subcategory])) {
        const price = await updateBlightsourcePrice(
          category,
          subcategory,
          name
        );
        getPrices()[category][subcategory][name] = price;
      }
    }
  }
  console.log('Updated prices');
};

// export async function useUpdateBlightsources() {

//   return useMutation(
//     () =>
//       updateBlightsourcePrice(category, subcategory, name),
//     {
//       onSuccess: (price) => {
//         queryClient.setQueryData(
//           ['blightsource', { category, subcategory, name }],
//           price
//         );
//       },
//     }
//   );
// }

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
      console.log('prices updated');
      queryClient.refetchQueries('blightsources', 'blightsource');
    },
  });
};
