import React from 'react';
import info from '../resources/blightsources.json';

// TODO: PUT A DICTIONARY OF CATEGORY ICONS

const BlightsourceSubcategoryCards = ({ category, subcategorySetter }) => {
  return (
    <ul className='space-y-3'>
      {info.information.map((category, i) => (
        <li key={i} className='sm:flex text-gray-300 hover:text-white'>
          <div className='mb-4 flex-shrink-0 sm:mb-0 sm:mr-4'>
            <svg
              className='h-64 w-64 border border-gray-300 bg-white'
              preserveAspectRatio='none'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 200 200'
              aria-hidden='true'
            >
              <path
                vectorEffect='non-scaling-stroke'
                strokeWidth={1}
                d='M0 0l200 200M0 200L200 0'
              />
            </svg>
          </div>
          <div className=''>
            <h4 className='text-lg font-bold'>{category.category}</h4>
            {category.description.map((s) => (
              <p className='mt-1'>{s}</p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlightsourceSubcategoryCards;
