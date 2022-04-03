import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import info from '../resources/blightsources.json';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ globally default to 20 seconds
      staleTime: 1000 * 20,
    },
  },
});

let prices = {};

const setBaseBlightsourcePrices = () => {
  const blightsourcePrices = {};

  for (const category in info.information) {
    const subcategories = {};

    for (const subcategory in category.subcategories) {
      const blightsources = {};

      for (const blightsource in info.blightsources[category][subcategory]) {
        const price = blightsource.baseValue;

        if (price === -1) {
          price = blightsource.rarity * 9;
        }

        blightsources[blightsource.name] = price;
      }

      subcategories[subcategory] = blightsources;
    }

    blightsourcePrices[category] = subcategories;
  }

  prices = blightsourcePrices;

  return blightsourcePrices;
};

const setInitialBlightsourceState = async () => {
  const { data } = setBaseBlightsourcePrices();
  return data;
};

const getBlightsource = async (category, subcategory, name) => {
  const data = prices[category][subcategory][name];

  return data;
};

export function useSetBlightsources() {
  return useMutation(() => setInitialBlightsourceState());
}

export function useBlightsource(category, subcategory, name) {
  return useQuery(['blightsource', name], () => getBlightsourceByName(name));
}
