import React from 'react';
import BlightsourceReadout from '../components/market/BlightsourceReadout';
import BlightsourceSubcategoryReadouts from '../components/market/BlightsourceSubcategoryReadout';
import PriceGraph from '../components/market/PriceGraph';
import { useGetBlightsources, useGetBlightsource } from '../hooks/blightsources';

const Market = () => {
  const { data: prices, isLoading: isBlightsourcesLoading } = useGetBlightsources();
  const { data: price, isLoading: isBlightsourceLoading } = useGetBlightsource('forslone');

  return (
    <div className=''>
      <BlightsourceSubcategoryReadouts subcategory='blightfoils' />
    </div>
  );
};

export default Market;
