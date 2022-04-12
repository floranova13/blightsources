import React from 'react';
import { useGetBlightsource } from '../../hooks/blightsources';
import SimpleAreaChart from './SimpleAreaChart';
import { toTitleCase } from '../../utils';

const PriceGraph = ({ blightsourceName, height, width }) => {
  const { data: price, isLoading: isBlightsourceLoading } =
    useGetBlightsource(blightsourceName);

  return (
    <div className='text-center inline-block'>
      <h2 className='text-gray-300 text-2xl font-bold inline'>
        {toTitleCase(blightsourceName)}
      </h2>
      {!isBlightsourceLoading && (
        <SimpleAreaChart
          key={price.priceHistory.length}
          data={price.priceHistory.slice(-6).map((p, i) => {
            return { name: `T${i}`, coins: p };
          })}
          height={height}
          width={width}
        />
      )}
    </div>
  );
};

export default PriceGraph;
