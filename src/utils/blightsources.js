import blightsources from '../common/resources/blightsources.json';

export const getRarity = (n) => {
  if (n < 9) {
    return 'Rare';
  } else if (n < 27) {
    return 'Uncommon';
  }
  return 'Common';
};

export const getBlightsourceCategories = () => {
  return blightsources.information;
};

export const getBlightsourceSubcategories = (category = '') => {
  if (category) {
    return getBlightsourceCategories().first((c) => c.name === category);
  }

  return getBlightsourceCategories().reduce((arr, c) => {
    arr.push(...c.subcategories);
    return arr;
  }, []);
};

export const getBlightsources = (category = '', subcategory = '') => {
  const blightsourceArray = [];

  Object.values(blightsources.blightsources).forEach((cat) =>
    Object.values(cat).forEach((sub) => {
      blightsourceArray.push(...sub);
    })
  );

  // for (const cat in Object.values(blightsources.blightsources)) {
  //   // for (const sub in Object.values(cat)) {
  //   //   blightsourceArray.push(...sub);
  //   // }
  // }

  return blightsourceArray.filter(
    (b) =>
      (!category || b.category === category) &&
      (!subcategory || b.subcategory === subcategory)
  );
};
