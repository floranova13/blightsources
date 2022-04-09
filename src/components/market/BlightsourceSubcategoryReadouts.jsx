import React from 'react';
import { toTitleCase } from '../../utils';
import { getBlightsourceNamesBySubcategory } from '../../utils/blightsources';
import PriceGraph from './PriceGraph';

const BlightsourceSubcategoryReadouts = ({ subcategory }) => {
  const blightsources = getBlightsourceNamesBySubcategory(subcategory);

  return (
    <div className='text-center'>
      <h2 className='text-white text-2xl font-bold'>
        {toTitleCase(subcategory)}
      </h2>
      {blightsources.map((b, i) => (
        <PriceGraph
          key={`${b}-price-graph`}
          blightsourceName={b}
          height={150}
          width={250}
        />
      ))}
    </div>
  );
};

export default BlightsourceSubcategoryReadouts;
