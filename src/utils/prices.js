import { getRandomInt } from './index';

let prices = {
  'forslone': {
    'basePrice': 243,
    'currentPrice': 251,
    'priceHistory': [
      195, 209, 239, 199, 196, 230, 230, 256, 285, 214, 282, 249, 252, 269, 243,
      285, 254, 274, 251,
    ],
  },
  'erecombe': {
    'basePrice': 81,
    'currentPrice': 84,
    'priceHistory': [
      65, 85, 68, 77, 76, 74, 75, 84, 84, 81, 67, 74, 64, 65, 77, 97, 65, 81,
      84,
    ],
  },
  'voidshimmer': {
    'basePrice': 9,
    'currentPrice': 7,
    'priceHistory': [
      8, 9, 9, 7, 7, 10, 10, 7, 7, 9, 7, 10, 8, 10, 8, 9, 9, 9, 7,
    ],
  },
  'apertrite': {
    'basePrice': 243,
    'currentPrice': 288,
    'priceHistory': [
      195, 274, 242, 256, 273, 249, 202, 236, 243, 221, 245, 206, 237, 236, 251,
      254, 242, 222, 288,
    ],
  },
  'meartite': {
    'basePrice': 81,
    'currentPrice': 65,
    'priceHistory': [
      65, 65, 81, 93, 68, 82, 91, 85, 80, 64, 78, 96, 94, 78, 72, 86, 86, 75,
      65,
    ],
  },
  'digitrite': {
    'basePrice': 9,
    'currentPrice': 7,
    'priceHistory': [
      8, 8, 10, 9, 7, 8, 8, 10, 10, 9, 10, 7, 8, 10, 7, 7, 8, 7, 7,
    ],
  },
  'charke': {
    'basePrice': 243,
    'currentPrice': 279,
    'priceHistory': [
      195, 243, 208, 252, 280, 266, 205, 208, 286, 244, 271, 290, 210, 233, 205,
      232, 204, 262, 279,
    ],
  },
  'amplare': {
    'basePrice': 81,
    'currentPrice': 76,
    'priceHistory': [
      65, 80, 79, 97, 79, 88, 80, 97, 82, 96, 97, 97, 86, 86, 65, 84, 64, 83,
      76,
    ],
  },
  'curos': {
    'basePrice': 9,
    'currentPrice': 9,
    'priceHistory': [
      7, 9, 10, 8, 9, 7, 9, 8, 9, 8, 10, 7, 10, 7, 7, 7, 9, 9, 9,
    ],
  },
  'rigorvat': {
    'basePrice': 243,
    'currentPrice': 207,
    'priceHistory': [
      195, 281, 272, 203, 223, 264, 209, 280, 259, 213, 279, 223, 205, 258, 212,
      268, 249, 228, 207,
    ],
  },
  'purivat': {
    'basePrice': 81,
    'currentPrice': 95,
    'priceHistory': [
      65, 70, 91, 70, 97, 64, 75, 65, 96, 80, 93, 92, 88, 83, 81, 84, 92, 84,
      95,
    ],
  },
  'mirivat': {
    'basePrice': 9,
    'currentPrice': 7,
    'priceHistory': [
      8, 10, 9, 7, 8, 10, 9, 8, 8, 9, 9, 8, 10, 10, 10, 7, 8, 7, 7,
    ],
  },
  'perceptyde': {
    'basePrice': 243,
    'currentPrice': 240,
    'priceHistory': [
      195, 226, 247, 208, 256, 240, 249, 264, 276, 223, 219, 215, 210, 217, 265,
      279, 275, 208, 240,
    ],
  },
  'residux': {
    'basePrice': 81,
    'currentPrice': 96,
    'priceHistory': [
      65, 66, 80, 76, 64, 83, 85, 64, 69, 66, 81, 83, 77, 69, 88, 82, 88, 84,
      96,
    ],
  },
  'falefate': {
    'basePrice': 9,
    'currentPrice': 9,
    'priceHistory': [
      7, 9, 10, 7, 8, 8, 7, 8, 7, 10, 7, 10, 10, 7, 10, 7, 8, 10, 9,
    ],
  },
  'blissburn': {
    'basePrice': 243,
    'currentPrice': 203,
    'priceHistory': [
      195, 254, 225, 278, 265, 213, 215, 270, 256, 278, 282, 261, 246, 240, 201,
      274, 252, 222, 203,
    ],
  },
  'red agony': {
    'basePrice': 81,
    'currentPrice': 82,
    'priceHistory': [
      65, 92, 77, 82, 82, 92, 78, 65, 64, 78, 78, 73, 78, 84, 86, 78, 89, 90,
      82,
    ],
  },
  'pulsepox': {
    'basePrice': 9,
    'currentPrice': 7,
    'priceHistory': [8, 9, 9, 7, 7, 9, 8, 8, 8, 7, 9, 8, 9, 7, 7, 7, 10, 9, 7],
  },
  'mystic': {
    'basePrice': 243,
    'currentPrice': 218,
    'priceHistory': [
      195, 208, 268, 250, 286, 202, 204, 278, 198, 257, 285, 197, 270, 253, 202,
      196, 201, 256, 218,
    ],
  },
  'surge': {
    'basePrice': 81,
    'currentPrice': 80,
    'priceHistory': [
      65, 65, 84, 72, 97, 84, 90, 77, 96, 92, 73, 68, 72, 90, 93, 91, 95, 86,
      80,
    ],
  },
  'edge': {
    'basePrice': 9,
    'currentPrice': 8,
    'priceHistory': [
      7, 7, 10, 9, 7, 9, 7, 7, 9, 9, 10, 7, 7, 10, 7, 8, 7, 8, 8,
    ],
  },
  'lasperr': {
    'basePrice': 243,
    'currentPrice': 221,
    'priceHistory': [
      195, 217, 255, 210, 232, 237, 201, 207, 269, 269, 239, 212, 238, 255, 253,
      288, 209, 213, 221,
    ],
  },
  'manaphage': {
    'basePrice': 81,
    'currentPrice': 84,
    'priceHistory': [
      65, 79, 75, 78, 83, 85, 92, 96, 78, 67, 72, 81, 64, 87, 80, 81, 75, 94,
      84,
    ],
  },
  'ominox': {
    'basePrice': 9,
    'currentPrice': 10,
    'priceHistory': [
      8, 9, 10, 10, 9, 10, 8, 8, 9, 10, 9, 10, 10, 10, 7, 10, 8, 8, 10,
    ],
  },
  'nullmist': {
    'basePrice': 243,
    'currentPrice': 242,
    'priceHistory': [
      195, 283, 239, 273, 276, 287, 271, 216, 194, 241, 239, 289, 211, 200, 248,
      285, 249, 267, 242,
    ],
  },
  'magnimist': {
    'basePrice': 81,
    'currentPrice': 91,
    'priceHistory': [
      65, 91, 77, 95, 80, 87, 73, 96, 88, 69, 88, 75, 82, 94, 95, 77, 84, 92,
      91,
    ],
  },
  'intermist': {
    'basePrice': 9,
    'currentPrice': 10,
    'priceHistory': [
      7, 8, 8, 7, 7, 8, 8, 10, 10, 7, 9, 8, 7, 10, 8, 10, 7, 9, 10,
    ],
  },
  'shrineflower': {
    'basePrice': 243,
    'currentPrice': 216,
    'priceHistory': [
      195, 196, 208, 232, 250, 215, 207, 222, 289, 291, 270, 205, 255, 281, 225,
      289, 238, 208, 216,
    ],
  },
  'hydrobloom': {
    'basePrice': 81,
    'currentPrice': 66,
    'priceHistory': [
      65, 68, 78, 97, 93, 86, 97, 77, 67, 83, 80, 65, 84, 84, 68, 71, 86, 92,
      66,
    ],
  },
  'shimmering nightblight': {
    'basePrice': 9,
    'currentPrice': 8,
    'priceHistory': [
      8, 10, 9, 9, 9, 7, 8, 7, 8, 9, 9, 7, 10, 8, 8, 7, 10, 10, 8,
    ],
  },
  'whitespire': {
    'basePrice': 243,
    'currentPrice': 248,
    'priceHistory': [
      195, 270, 219, 253, 247, 242, 266, 231, 277, 267, 230, 257, 281, 205, 235,
      212, 260, 274, 248,
    ],
  },
  'greyspire': {
    'basePrice': 81,
    'currentPrice': 87,
    'priceHistory': [
      65, 83, 65, 76, 80, 76, 80, 86, 92, 84, 85, 74, 81, 89, 97, 92, 69, 75,
      87,
    ],
  },
  'blackspire': {
    'basePrice': 9,
    'currentPrice': 9,
    'priceHistory': [
      7, 7, 7, 10, 8, 10, 7, 9, 8, 10, 8, 7, 8, 10, 7, 10, 9, 8, 9,
    ],
  },
  'silverclutch': {
    'basePrice': 243,
    'currentPrice': 264,
    'priceHistory': [
      195, 283, 206, 196, 248, 223, 198, 194, 207, 206, 259, 220, 245, 261, 263,
      243, 260, 230, 264,
    ],
  },
  'wenderweave': {
    'basePrice': 81,
    'currentPrice': 68,
    'priceHistory': [
      65, 79, 85, 90, 86, 90, 94, 84, 82, 95, 86, 89, 67, 87, 78, 86, 78, 65,
      68,
    ],
  },
  'darkcoil': {
    'basePrice': 243,
    'currentPrice': 219,
    'priceHistory': [
      195, 263, 290, 268, 286, 278, 199, 264, 221, 217, 291, 286, 218, 213, 238,
      209, 286, 198, 219,
    ],
  },
  'metashroom': {
    'basePrice': 81,
    'currentPrice': 90,
    'priceHistory': [
      65, 73, 89, 81, 96, 84, 85, 95, 87, 81, 89, 83, 86, 96, 96, 88, 83, 74,
      90,
    ],
  },
  'tranceloom': {
    'basePrice': 9,
    'currentPrice': 8,
    'priceHistory': [
      7, 8, 10, 8, 9, 7, 7, 9, 9, 7, 9, 8, 10, 10, 9, 7, 9, 10, 8,
    ],
  },
  'trickelpus': {
    'basePrice': 243,
    'currentPrice': 227,
    'priceHistory': [
      194, 226, 264, 209, 258, 252, 212, 207, 211, 290, 269, 276, 238, 290, 230,
      250, 255, 287, 227,
    ],
  },
  'rockmole': {
    'basePrice': 81,
    'currentPrice': 78,
    'priceHistory': [
      65, 76, 71, 89, 82, 72, 69, 90, 97, 89, 95, 77, 67, 73, 89, 72, 83, 89,
      78,
    ],
  },
  'achromatic ooze': {
    'basePrice': 9,
    'currentPrice': 10,
    'priceHistory': [
      7, 8, 7, 10, 7, 9, 10, 7, 9, 7, 9, 9, 8, 8, 7, 8, 7, 8, 10,
    ],
  },
  'sporesprawl1': {
    'basePrice': 243,
    'currentPrice': 226,
    'priceHistory': [
      195, 233, 257, 206, 209, 248, 223, 266, 266, 283, 278, 195, 263, 267, 202,
      198, 208, 290, 226,
    ],
  },
  'sporesprawl2': {
    'basePrice': 81,
    'currentPrice': 81,
    'priceHistory': [
      65, 94, 92, 67, 85, 85, 75, 69, 82, 82, 78, 80, 78, 75, 76, 85, 70, 84,
      81,
    ],
  },
  'sporesprawl3': {
    'basePrice': 9,
    'currentPrice': 10,
    'priceHistory': [
      7, 7, 8, 8, 8, 10, 7, 8, 10, 9, 9, 7, 8, 9, 8, 10, 9, 10, 10,
    ],
  },
  'dusk orb': {
    'basePrice': 243,
    'currentPrice': 288,
    'priceHistory': [
      195, 209, 287, 286, 209, 196, 207, 280, 195, 220, 208, 239, 231, 196, 269,
      260, 288, 227, 288,
    ],
  },
  'token2': {
    'basePrice': 81,
    'currentPrice': 71,
    'priceHistory': [
      65, 97, 73, 75, 71, 97, 93, 64, 92, 67, 82, 96, 81, 64, 86, 86, 71, 84,
      71,
    ],
  },
  'token3': {
    'basePrice': 9,
    'currentPrice': 8,
    'priceHistory': [
      8, 10, 8, 9, 10, 8, 8, 7, 10, 9, 7, 10, 8, 8, 8, 10, 9, 10, 8,
    ],
  },
  'locus1': {
    'basePrice': 243,
    'currentPrice': 257,
    'priceHistory': [
      195, 199, 280, 251, 249, 218, 225, 226, 234, 195, 248, 219, 231, 245, 198,
      272, 224, 209, 257,
    ],
  },
  'locus2': {
    'basePrice': 81,
    'currentPrice': 80,
    'priceHistory': [
      65, 97, 65, 85, 75, 79, 95, 90, 97, 72, 74, 68, 66, 96, 74, 96, 70, 72,
      80,
    ],
  },
  'locus3': {
    'basePrice': 9,
    'currentPrice': 10,
    'priceHistory': [
      7, 10, 8, 7, 10, 8, 8, 10, 9, 9, 10, 7, 10, 7, 7, 8, 9, 9, 10,
    ],
  },
  'lightmare prism': {
    'basePrice': 243,
    'currentPrice': 230,
    'priceHistory': [
      195, 244, 217, 215, 274, 280, 201, 234, 260, 204, 248, 289, 213, 239, 201,
      251, 245, 225, 230,
    ],
  },
  'vestige2': {
    'basePrice': 81,
    'currentPrice': 72,
    'priceHistory': [
      65, 97, 94, 94, 83, 64, 92, 68, 73, 79, 66, 66, 97, 91, 76, 95, 91, 84,
      72,
    ],
  },
  'vestige3': {
    'basePrice': 9,
    'currentPrice': 9,
    'priceHistory': [
      7, 10, 7, 9, 9, 8, 8, 7, 10, 10, 10, 9, 8, 7, 10, 8, 8, 8, 9,
    ],
  },
};

export const getPrices = () => prices;

export const getPrice = (blightsourceName) => {
  console.log('price: ', prices[blightsourceName]);
  return prices[blightsourceName];
};

export const getNewBlightsourcePrice = (price) => {
  const { basePrice, priceHistory } = price;
  let maxMult = Math.floor((120 * basePrice) / 100);
  let minMult = Math.floor((80 * basePrice) / 100);
  const newCurrentPrice = getRandomInt(minMult, maxMult + 1);

  const newPrice = {
    basePrice,
    currentPrice: newCurrentPrice,
    priceHistory: [...priceHistory, newCurrentPrice],
  };

  return newPrice;
};

export const updatePrices = () => {
  const newPrices = {};

  for (const blightsourceName in prices) {
    if (prices.hasOwnProperty(blightsourceName)) {
      const newPrice = getNewBlightsourcePrice(prices[blightsourceName]);
      newPrices[blightsourceName] = newPrice;
    }
  }

  console.log({ prices });

  prices = newPrices;
};
