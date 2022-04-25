import React, { useState, useEffect } from 'react';
import { useGetPrices, useGetPrice } from '../hooks/prices';

const Information = () => {
  const [blightsources, setBlightsources] = useState([]);
  const [prices, setPrices] = useState([]);
  const { data: pricesData, isLoading: isLoadingPrices } = useGetPrices();

  const fetchBlightsources = async () => {
    const response = await fetch(
      'https://blightsources-backend.herokuapp.com/api/blightsources'
    );
    const data = await response.json();
    setBlightsources(data);
  };

  useEffect(() => {
    // fetchBlightsources();
    if (!isLoadingPrices) {
      setPrices(pricesData);
    }
  }, [pricesData, isLoadingPrices]);

  return (
    <div className='text-white'>
      {/* <h1>{blightsources}</h1> */}
      <ul>
        {prices.map((p, i) => {
          return <li key={p.name}>{`${p.name} - ${p.basePrice}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default Information;
