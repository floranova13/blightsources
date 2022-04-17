import React from 'react';
import IconWrapper from '../components/Icon';
import { toTitleCase } from '../utils';

const Market = () => {
  const categories = [
    'blightstones',
    'blightichors',
    'blightfumes',
    'blightflora',
    'blightfungi',
    'blightanomalies',
  ];

  return (
    <div className='text-white w-5/6 m-auto'>
      <ul className='flex text-center'>
        {categories.map((category) => (
          <li key={category} className='w-1/3'>
            <div className='flex align-middle items-center justify-center'>
              <IconWrapper className='' icon={category} size='72' />
              <button
                type='button'
                className='absolute inset-0 focus:outline-none'
              >
                <span className='sr-only'>{`${toTitleCase(
                  category
                )} Market Details`}</span>
              </button>
            </div>
            <p className='mt-2 inline-block text-sm font-medium white'>
              {toTitleCase(category)}
            </p>
            <br />
            <p className='inline-block text-sm font-medium text-gray-500'>
              {0}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Market;
