import React from 'react';
import info from '../resources/blightsources.json';

// TODO: PUT A DICTIONARY OF CATEGORY ICONS

const Blightsource = ({
  category,
  subcategory,
  categorySetter,
  subcategorySetter,
}) => {
  return (
    <>
      <div className='blightsource-nav-container mb-4'>
        <button
          type='button'
          className='px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2 w-32 text-center'
          onClick={() => subcategorySetter('')}
        >
          Back
        </button>
        <button
          type='button'
          className='px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-32 text-center'
          onClick={() => {
            categorySetter('');
            subcategorySetter('');
          }}
        >
          Categories
        </button>
      </div>
    </>
  );
};

export default Blightsource;
