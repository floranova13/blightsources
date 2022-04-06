import React from 'react';
import {
  useBlightsource,
  useUpdateBlightsource,
  getPrices,
  getPrice,
} from '../hooks/blightsources';
import { useQuery } from 'react-query';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const getBlightsources = async () => {
  const data = getPrices();
  return data;
};

const getBlightsource = async (category, subcategory, name) => {
  const data = getPrice(category, subcategory, name);
  return data;
};

const Market = () => {
  // const { data, isLoading } = useBlightsource('blightstones', 'blightfoils', 'Forslone');
  const { data, isLoading } = useQuery('blightsources', getBlightsources, {
    staleTime: 5000,
    refetchInterval: 5000,
  });
  console.log(isLoading);

  return (
    <div className=''>
      <h1>{isLoading.toString()}</h1>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Market;
