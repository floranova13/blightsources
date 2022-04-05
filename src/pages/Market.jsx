import React from 'react';
import { useBlightsource, useUpdateBlightsource } from '../hooks/blightsources';

const Market = () => {
  const { data, isLoading } = useBlightsource('blightstones', 'blightfoils', 'Forslone');

  return (
    <div className=''>
      {!isLoading && <h1>{data.currentPrice}</h1>}
    </div>
  );
};

export default Market;
