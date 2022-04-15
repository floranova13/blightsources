// import React, { useState, useEffect } from 'react';
// import { useGetBlightsources } from '../../hooks/blightsources';
// import SimpleAreaChart from './SimpleAreaChart';
// import { toTitleCase } from '../../utils';
// import { getRecentPrices } from '../../utils/prices';
// import {
//   getBlightsourceByName,
//   getBlightsourceNamesBySubcategory,
//   getBlightsourceNamesByCategory,
// } from '../../utils/blightsources';
// import { Link } from 'react-router-dom';

// const getPerformance = (prices, type, filter) => {
//   let bArr = [];
//   switch (type) {
//     case 'category':
//       break;
//     case 'subcategory':
//       break;
//     case 'blightsource':
//       break;
//     default:
//       break;
//   }
// };

// const getBlightsourceUrl = (s) => {
//   const b = getBlightsourceByName(s);
//   const cat = b.category.toLowerCase();
//   const subcat = b.subcategory.toLowerCase();
//   return `/market/${cat}/${subcat}/${s}`;
// };

// const PriceGraph = ({ filter, type, height, width }) => {
//   const { data: price, isLoading } = useGetBlightsources();

//   return (
//     <div className='text-center inline-block'>
//       {!isLoading && (
//         <Link
//           to={getBlightsourceUrl(blightsourceName)}
//           className='text-gray-500 text-2xl font-bold transition-all duration-1000 inline hover:text-white hover:em'
//         >
//           {toTitleCase(blightsourceName)}
//         </Link>
//       )}
//       {!isLoading && (
//         <SimpleAreaChart
//           key={price.priceHistory.length}
//           data={getRecentPrices(price).map((p, i) => {
//             return { name: `T${i}`, coins: p };
//           })}
//           height={height}
//           width={width}
//         />
//       )}
//     </div>
//   );
// };

// export default PriceGraph;
