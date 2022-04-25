import React, { useState, useEffect } from 'react';
// import fetch from 'node-fetch';

const Information = () => {
  const [blightsources, setBlightsources] = useState([]);

  const fetchBlightsources = async () => {
    const response = await fetch(
      'https://blightsources-backend.herokuapp.com/api/blightsources'
    );
    const data = await response.json();
    setBlightsources(data);
  };

  useEffect(() => {
    fetchBlightsources();
  }, []);

  return (
    <div className='text-white'>
      {/* <h1>{blightsources}</h1> */}
      <ul>
        {blightsources.map((b, i) => {
          return <li key={b.name}>{b.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Information;
