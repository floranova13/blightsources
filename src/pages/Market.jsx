import React from 'react';
import BlightsourceReadout from '../components/market/BlightsourceReadout';
import BlightsourceSubcategoryReadouts from '../components/market/BlightsourceSubcategoryReadouts';
import PriceGraph from '../components/market/PriceGraph';
import { useGetBlightsources, useGetBlightsource } from '../hooks/blightsources';

const Market = () => {
  const { data: prices, isLoading: isBlightsourcesLoading } = useGetBlightsources();
  const { data: price, isLoading: isBlightsourceLoading } = useGetBlightsource('forslone');

  return (
    <div className=''>
      {/* {!isBlightsourceLoading && <h1>{ price.priceHistory.join(', ') }</h1>}
      {!isBlightsourcesLoading && <h1>{JSON.stringify(prices.map(b => ))}</h1>} */}
      {/* <PriceGraph blightsourceName='forslone' /> */}
      {/* <BlightsourceReadout blightsourceName='forslone' /> */}
      <BlightsourceSubcategoryReadouts subcategory='blightfoils' />
    </div>
  );
};

export default Market;
