import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

const fetchBlightsources = async () => {
  const response = await fetch(
    'https://blightsources-backend.herokuapp.com/api/blightsources'
  );
  const data = await response.json();

  return data;
};

const Information = () => {
  const [blightsources, setBlightsources] = useState([]);

  useEffect(() => {
    setBlightsources(fetchBlightsources());
  }, []);

  return (
    <ul>
      {blightsources.map((b, i) => {
        return <li key={b.name}>{b.name}</li>;
      })}
    </ul>
  );
};

export default Information;
