import { useQuery } from 'react-query';

const fetchPrices = async () => {
  const response = await fetch(
    'https://blightsources-backend.herokuapp.com/api/prices'
  );
  const data = await response.json();
  return data;
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
