import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query';
import info from '../resources/blightsources.json';

let prices = {}; // TODO: PUT THIS IN LOCAL STATE IF THIS DOESN'T WORK

const setBaseBlightsourcePrices = () => {
  const blightsourcePrices = {};

  for (const category in info.information) {
    const subcategories = {};

    for (const subcategory in category.subcategories) {
      const blightsources = {};

      for (const blightsource in info.blightsources[category][subcategory]) {
        let basePrice = blightsource.baseValue;
        let maxMult = 1.2;
        let minMult = 0.8;

        if (basePrice === -1) {
          basePrice = blightsource.rarity * 9;
        }

        const currentPrice =
          (Math.random() * (maxMult - minMult) + minMult) * basePrice;

        blightsources[blightsource.name] = { basePrice, currentPrice };
      }

      subcategories[subcategory] = blightsources;
    }

    blightsourcePrices[category] = subcategories;
  }

  prices = blightsourcePrices;

  return blightsourcePrices;
};

const getNewBlightsourcePrice = async (price) => {
  let maxMult = 1.2;
  let minMult = 0.8;
  const { basePrice } = price;
  const newCurrentPrice =
    (Math.random() * (maxMult - minMult) + minMult) * basePrice;

  return { basePrice, currentPrice: newCurrentPrice };
};

const setInitialBlightsourceState = async () => {
  const data = setBaseBlightsourcePrices();
  return data;
};

const updateBlightsourcePrice = async (category, subcategory, name) => {
  const price = await getBlightsource(category, subcategory, name);
  const data = getNewBlightsourcePrice(price);

  return data;
};

const getBlightsource = async (category, subcategory, name) => {
  const data = prices[category][subcategory][name];

  return data;
};

export function useSetBlightsources() {
  return useMutation(() => setInitialBlightsourceState());
}

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

export function useBlightsource(category, subcategory, name) {
  return useQuery(['blightsource', { category, subcategory, name }], () =>
    getBlightsource(category, subcategory, name)
  );
}
