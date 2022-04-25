import { useQuery } from 'react-query';

const fetchPrices = async () => {
  const response = await fetch(
    'https://blightsources-backend.herokuapp.com/api/prices'
  );
  const data = await response.json();
  const pricesData = {}

  for(const price of data) {
    pricesData[price.name] = price
  }

  return pricesData;
};

const fetchPrice = async (blightsourceName) => {
  const response = await fetch(
    `https://blightsources-backend.herokuapp.com/api/prices/${blightsourceName}`
  );
  const data = await response.json();
  return data;
};

export const useGetPrices = () => {
  return useQuery(['prices'], fetchPrices);
};

export const useGetPrice = (name) => {
  return useQuery(['price', name.toLowerCase()], fetchPrice(name));
};
