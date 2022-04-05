import { useQuery, useMutation, useQueryClient } from 'react-query';
import info from '../resources/blightsources.json';

let prices = {}; // TODO: PUT THIS IN LOCAL STATE IF THIS DOESN'T WORK

export const setBaseBlightsourcePrices = () => {
  const blightsourcePrices = {};

  for (const c of info.information) {
    const subcategories = {};
    const category = c.category.toLowerCase();

    for (const s of c.subcategories) {
      const blightsources = {};
      const subcategory = s.subcategory.toLowerCase();

      for (const blightsource of info.blightsources[category][subcategory]) {
        // console.log({ blightsource })
        let basePrice = blightsource.basevalue;
        let maxMult = 1.2;
        let minMult = 0.8;

        if (basePrice === -1) {
          basePrice = blightsource.rarity * 9;
        }

        const currentPrice =
          Math.round(Math.random() * (maxMult - minMult) + minMult) * basePrice;

        blightsources[blightsource.name] = { basePrice, currentPrice };
        console.log(blightsources[blightsource.name]);
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
  const data = await getNewBlightsourcePrice(price);
  prices[category][subcategory][name] = data;

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

export const updateAllBlightsources = async () => {
  for (const category of prices) {
    console.log(category);
    for (const subcategory of category) {
      console.log(subcategory);
      for (const name of subcategory) {
        console.log(name);
        await updateBlightsourcePrice(category, subcategory, name);
      }
    }
  }
}

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

export function useBlightsource(category, subcategory, name) {
  return useQuery(['blightsource', { category, subcategory, name }], () =>
    getBlightsource(category, subcategory, name)
  );
}
