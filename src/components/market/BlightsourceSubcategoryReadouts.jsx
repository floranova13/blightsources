import React, { useState, useEffect } from 'react';
import { toTitleCase } from '../../utils';
import {
  getBlightsourceNamesBySubcategory,
  getCategoryBySubcategory,
} from '../../utils/blightsources';
import { getRecentPrices } from '../../utils/prices'
import PriceGraph from './PriceGraph';
import { useNavigate } from 'react-router-dom';
import { useGetBlightsources } from '../../hooks/blightsources';

const BlightsourceSubcategoryReadouts = ({ subcategory }) => {
  const category = getCategoryBySubcategory(subcategory);
  const blightsources = getBlightsourceNamesBySubcategory(subcategory);
  const { data: prices, isLoading } = useGetBlightsources();
  const [averagePrice, setAveragePrice] = useState('');
  const [averagePerformance, setAveragePerformance] = useState(''); // Average Percentage Increase Or Decrease
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  useEffect(() => {
    if (!isLoading) {
      const totalPrice = blightsources.reduce((previous, current) => {
        return previous + prices[current].currentPrice;
      }, 0);
      const totalPerformance = blightsources.reduce((previous, current) => {
        const recentPrices = getRecentPrices(prices[current]);
        const difference = prices[current].currentPrice - recentPrices[recentPrices.length - 1];
        const percentage = difference / recentPrices[recentPrices.length - 1] * 100;
        return previous + percentage;
      }, 0);
      setAveragePrice(Math.round((totalPrice + Number.EPSILON) * 100 / blightsources.length) / 100);
      setAveragePerformance(Math.round((totalPerformance + Number.EPSILON) * 100 / blightsources.length) / 100);
    }
  }, [prices, isLoading]);

  const navigate = useNavigate();

  return (
    <div className='text-center my-3'>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            {toTitleCase(subcategory)}
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            General market information.
          </p>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
          <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Average Price
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>{averagePrice}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Average Performance
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>{averagePerformance}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>X</dt>
              <dd className='mt-1 text-sm text-gray-900'>{averagePrice}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Y</dt>
              <dd className='mt-1 text-sm text-gray-900'>{averagePrice}</dd>
            </div>
            <div className='sm:col-span-2'>
              <dt className='text-sm font-medium text-gray-500'>
                Individual Charts
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div className='sm:col-span-2'>
              <dt className='text-sm font-medium text-gray-500'>
                Individual Charts
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {blightsources.map((b, i) => (
                  <div key={`${b}-price-graph`} className='w-1/3 inline'>
                    <PriceGraph
                      key={`${b}-price-graph`}
                      blightsourceName={b}
                      height={150}
                      width={250}
                    />
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* <button
        type='button'
        className='px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-32 text-center'
        onClick={() => navigate(`/market/${category}`)}
      >
        Back
      </button>
      <div className=''>
        <span className='text-white text-2xl font-bold my-3 inline-block'>
          {toTitleCase(subcategory)}
        </span>
      </div>

      {blightsources.map((b, i) => (
        <div key={`${b}-price-graph`} className='w-1/3 inline'>
          <PriceGraph
            key={`${b}-price-graph`}
            blightsourceName={b}
            height={150}
            width={250}
          />
        </div>
      ))} */}
    </div>
  );
};

export default BlightsourceSubcategoryReadouts;
