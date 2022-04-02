import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BlightsourceCategoryCards from '../components/BlightsourceCategoryCards';
import BlightsourceSubcategoryCards from '../components/BlightsourceSubcategoryCards';
import Blightsource from '../components/Blightsource';

const Blightsources = () => {
  const location = useLocation();
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  useEffect(() => {
    setCategory('');
    setSubcategory('');
  }, [location]);

  return (
    <>
      {(!category && !subcategory) && <BlightsourceCategoryCards categorySetter={setCategory} />}
      {(category && !subcategory) && <BlightsourceSubcategoryCards category={category} subcategorySetter={setSubcategory} />}
      {(category && subcategory) && <Blightsource category={category} subcategory={subcategory} />}
    </>
  );
};

export default Blightsources;
