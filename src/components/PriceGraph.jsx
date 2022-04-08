import React from 'react';
import {
  useGetBlightsource,
} from '../hooks/blightsources';
import SimpleAreaChart from './SimpleAreaChart';
import { toTitleCase } from '../utils';

const PriceGraph = ({ blightsourceName }) => {
  const { data: price, isLoading: isBlightsourceLoading } =
    useGetBlightsource(blightsourceName);

  return (
    <div className='text-center h-full w-full'>
      <h2 className='text-white text-2xl font-bold'>{toTitleCase(blightsourceName)}</h2>
      {!isBlightsourceLoading && (
        <SimpleAreaChart
          data={price.priceHistory.map((p, i) => {
            return { name: `T-${i}`, coins: p };
          })}
        />
      )}
    </div>
  );
};

export default PriceGraph;
