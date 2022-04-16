import {
  getBlightsourceByName,
  getBlightsourceNamesByCategory,
  getBlightsourceNamesBySubcategory,
} from './blightsources';
import { getRandomInt, clamp, getMean, getMedian } from './index';

let prices = {
  'forslone': {
    'basePrice': 9,
    'currentPrice': 5,
    'priceHistory': [
      5, 6, 2, 2, 4, 3, 7, 10, 14, 16, 16, 16, 14, 12, 13, 14, 10, 6, 8, 7, 11,
      15, 16, 16, 12, 13, 10, 7, 9, 10,
    ],
  },
  'erecombe': {
    'basePrice': 495,
    'currentPrice': 219,
    'priceHistory': [
      219, 237, 233, 220, 239, 246, 225, 211, 213, 204, 218, 196, 176, 166, 164,
      145, 152, 160, 143, 159, 176, 177, 164, 175, 186, 194, 185, 179, 172, 159,
    ],
  },
  'voidshimmer': {
    'basePrice': 711,
    'currentPrice': 412,
    'priceHistory': [
      412, 403, 380, 359, 343, 351, 338, 352, 357, 331, 345, 334, 312, 310, 305,
      299, 295, 267, 294, 304, 321, 311, 335, 330, 322, 324, 340, 334, 331, 303,
    ],
  },
  'apertrite': {
    'basePrice': 9,
    'currentPrice': 7,
    'priceHistory': [
      7, 3, 6, 3, 5, 8, 7, 5, 6, 2, 6, 10, 11, 8, 6, 4, 2, 2, 2, 4, 5, 4, 3, 5,
      9, 12, 11, 15, 14, 12,
    ],
  },
  'meartite': {
    'basePrice': 495,
    'currentPrice': 726,
    'priceHistory': [
      726, 718, 737, 743, 729, 735, 744, 732, 724, 708, 698, 679, 693, 671, 654,
      637, 630, 643, 624, 625, 616, 622, 619, 602, 591, 577, 566, 575, 578, 557,
    ],
  },
  'digitrite': {
    'basePrice': 711,
    'currentPrice': 752,
    'priceHistory': [
      752, 746, 760, 739, 727, 699, 710, 697, 701, 693, 668, 649, 623, 614, 611,
      601, 604, 576, 559, 574, 581, 598, 585, 586, 597, 573, 552, 554, 564, 553,
    ],
  },
  'charke': {
    'basePrice': 9,
    'currentPrice': 7,
    'priceHistory': [
      7, 10, 12, 13, 12, 8, 5, 8, 4, 2, 2, 2, 4, 7, 4, 8, 6, 9, 12, 9, 13, 15,
      11, 13, 16, 13, 9, 11, 14, 10,
    ],
  },
  'amplare': {
    'basePrice': 495,
    'currentPrice': 177,
    'priceHistory': [
      177, 193, 178, 158, 153, 150, 168, 147, 169, 148, 130, 124, 131, 134, 124,
      142, 127, 134, 124, 124, 124, 136, 141, 146, 166, 146, 137, 158, 169, 184,
    ],
  },
  'curos': {
    'basePrice': 711,
    'currentPrice': 434,
    'priceHistory': [
      434, 405, 406, 429, 404, 417, 434, 451, 449, 463, 469, 460, 432, 444, 438,
      418, 442, 414, 418, 433, 450, 446, 441, 469, 482, 458, 465, 447, 417, 424,
    ],
  },
  'rigorvat': {
    'basePrice': 9,
    'currentPrice': 11,
    'priceHistory': [
      11, 12, 16, 12, 10, 6, 4, 8, 6, 5, 4, 5, 4, 2, 2, 3, 2, 3, 6, 9, 13, 12,
      13, 15, 16, 16, 14, 16, 15, 12,
    ],
  },
  'purivat': {
    'basePrice': 495,
    'currentPrice': 741,
    'priceHistory': [
      741, 722, 733, 746, 752, 736, 756, 770, 764, 745, 730, 752, 747, 756, 772,
      779, 789, 767, 759, 746, 724, 744, 729, 710, 688, 670, 661, 673, 689, 685,
    ],
  },
  'mirivat': {
    'basePrice': 711,
    'currentPrice': 284,
    'priceHistory': [
      284, 286, 284, 310, 336, 327, 308, 332, 347, 338, 340, 348, 368, 383, 385,
      405, 376, 351, 360, 351, 322, 350, 324, 304, 315, 294, 309, 283, 278, 301,
    ],
  },
  'perceptyde': {
    'basePrice': 9,
    'currentPrice': 5,
    'priceHistory': [
      5, 9, 7, 6, 8, 9, 5, 2, 2, 6, 2, 5, 9, 5, 3, 2, 2, 3, 2, 3, 2, 6, 2, 3, 7,
      9, 13, 16, 13, 12,
    ],
  },
  'residux': {
    'basePrice': 495,
    'currentPrice': 611,
    'priceHistory': [
      611, 596, 589, 579, 577, 580, 575, 556, 536, 527, 530, 521, 533, 512, 524,
      519, 540, 549, 571, 568, 590, 577, 589, 567, 582, 601, 583, 579, 569, 576,
    ],
  },
  'falefate': {
    'basePrice': 711,
    'currentPrice': 1191,
    'priceHistory': [
      1191, 1183, 1159, 1144, 1168, 1149, 1177, 1182, 1212, 1218, 1238, 1244,
      1223, 1244, 1244, 1230, 1244, 1237, 1244, 1244, 1244, 1231, 1212, 1216,
      1204, 1181, 1156, 1153, 1134, 1137,
    ],
  },
  'blissburn': {
    'basePrice': 9,
    'currentPrice': 4,
    'priceHistory': [
      4, 6, 8, 11, 9, 5, 2, 4, 2, 3, 2, 4, 3, 2, 6, 5, 9, 5, 4, 8, 6, 4, 8, 4,
      2, 2, 2, 2, 5, 2,
    ],
  },
  'red agony': {
    'basePrice': 495,
    'currentPrice': 563,
    'priceHistory': [
      563, 559, 565, 547, 562, 565, 558, 562, 572, 559, 562, 553, 560, 565, 577,
      597, 591, 593, 588, 583, 590, 589, 570, 559, 546, 565, 557, 542, 561, 541,
    ],
  },
  'pulsepox': {
    'basePrice': 711,
    'currentPrice': 339,
    'priceHistory': [
      339, 331, 320, 312, 317, 339, 363, 365, 383, 413, 432, 425, 413, 441, 451,
      471, 499, 509, 521, 513, 510, 531, 539, 512, 533, 513, 525, 537, 524, 521,
    ],
  },
  'mystic': {
    'basePrice': 9,
    'currentPrice': 6,
    'priceHistory': [
      6, 7, 8, 5, 3, 7, 5, 2, 6, 3, 5, 7, 10, 6, 2, 2, 5, 2, 4, 3, 4, 2, 2, 6,
      3, 2, 2, 6, 8, 6,
    ],
  },
  'surge': {
    'basePrice': 495,
    'currentPrice': 470,
    'priceHistory': [
      470, 487, 497, 517, 528, 527, 525, 510, 501, 495, 507, 496, 489, 511, 519,
      498, 510, 498, 513, 525, 544, 565, 558, 546, 549, 558, 555, 573, 590, 592,
    ],
  },
  'edge': {
    'basePrice': 711,
    'currentPrice': 458,
    'priceHistory': [
      458, 482, 468, 444, 441, 459, 467, 483, 467, 445, 438, 442, 460, 467, 472,
      471, 450, 421, 426, 445, 468, 467, 479, 478, 470, 442, 463, 475, 448, 477,
    ],
  },
  'lasperr': {
    'basePrice': 9,
    'currentPrice': 9,
    'priceHistory': [
      9, 13, 11, 7, 4, 6, 7, 5, 7, 4, 2, 6, 4, 5, 4, 7, 5, 6, 2, 4, 6, 9, 12,
      15, 14, 10, 8, 10, 13, 16,
    ],
  },
  'manaphage': {
    'basePrice': 495,
    'currentPrice': 770,
    'priceHistory': [
      770, 781, 764, 773, 757, 779, 787, 785, 797, 784, 804, 796, 806, 803, 789,
      801, 820, 836, 855, 838, 816, 795, 799, 821, 812, 819, 798, 815, 807, 825,
    ],
  },
  'ominox': {
    'basePrice': 711,
    'currentPrice': 306,
    'priceHistory': [
      306, 279, 265, 284, 277, 279, 254, 242, 270, 273, 287, 281, 305, 276, 271,
      299, 295, 292, 318, 316, 310, 283, 269, 299, 305, 312, 291, 318, 301, 281,
    ],
  },
  'nullmist': {
    'basePrice': 9,
    'currentPrice': 14,
    'priceHistory': [
      14, 16, 15, 14, 16, 16, 13, 16, 16, 16, 13, 10, 12, 10, 13, 16, 14, 10,
      12, 11, 12, 14, 16, 13, 9, 12, 10, 7, 5, 2,
    ],
  },
  'magnimist': {
    'basePrice': 495,
    'currentPrice': 708,
    'priceHistory': [
      708, 724, 721, 715, 732, 719, 697, 677, 692, 714, 728, 737, 719, 727, 716,
      735, 756, 760, 771, 772, 764, 769, 774, 772, 752, 761, 783, 769, 761, 762,
    ],
  },
  'intermist': {
    'basePrice': 711,
    'currentPrice': 866,
    'priceHistory': [
      866, 877, 860, 844, 827, 824, 828, 839, 857, 837, 838, 859, 849, 859, 842,
      813, 786, 800, 805, 813, 805, 802, 831, 823, 822, 830, 856, 844, 850, 878,
    ],
  },
  'shrineflower': {
    'basePrice': 9,
    'currentPrice': 10,
    'priceHistory': [
      10, 12, 16, 12, 9, 10, 7, 10, 11, 13, 11, 12, 10, 13, 12, 13, 11, 7, 11,
      14, 16, 16, 15, 16, 16, 13, 15, 16, 15, 13,
    ],
  },
  'hydrobloom': {
    'basePrice': 495,
    'currentPrice': 827,
    'priceHistory': [
      827, 830, 844, 863, 861, 843, 841, 849, 840, 832, 835, 820, 827, 813, 831,
      818, 806, 787, 783, 800, 805, 783, 769, 755, 751, 764, 760, 761, 769, 750,
    ],
  },
  'shimmering nightblight': {
    'basePrice': 711,
    'currentPrice': 916,
    'priceHistory': [
      916, 939, 966, 943, 959, 942, 963, 978, 984, 974, 1002, 990, 1000, 1005,
      1008, 983, 1007, 1001, 978, 951, 950, 958, 961, 971, 952, 944, 951, 926,
      914, 907,
    ],
  },
  'whitespire': {
    'basePrice': 9,
    'currentPrice': 3,
    'priceHistory': [
      3, 7, 5, 8, 10, 11, 7, 9, 5, 2, 6, 7, 8, 9, 12, 9, 6, 2, 2, 2, 5, 4, 2, 2,
      2, 2, 4, 6, 10, 9,
    ],
  },
  'greyspire': {
    'basePrice': 495,
    'currentPrice': 647,
    'priceHistory': [
      647, 658, 656, 643, 660, 676, 694, 702, 694, 714, 732, 746, 756, 754, 753,
      732, 717, 732, 736, 724, 719, 732, 746, 756, 777, 784, 795, 811, 804, 825,
    ],
  },
  'blackspire': {
    'basePrice': 711,
    'currentPrice': 641,
    'priceHistory': [
      641, 662, 639, 634, 615, 586, 602, 604, 624, 650, 648, 644, 632, 631, 648,
      623, 646, 651, 623, 639, 622, 618, 637, 642, 654, 638, 618, 647, 663, 662,
    ],
  },
  'silverclutch': {
    'basePrice': 9,
    'currentPrice': 13,
    'priceHistory': [
      13, 16, 16, 16, 16, 12, 9, 7, 6, 10, 12, 15, 16, 15, 16, 16, 16, 12, 9, 6,
      9, 7, 6, 2, 2, 5, 7, 11, 10, 13,
    ],
  },
  'wenderweave': {
    'basePrice': 495,
    'currentPrice': 356,
    'priceHistory': [
      356, 369, 370, 358, 361, 365, 379, 390, 395, 408, 405, 402, 384, 383, 394,
      404, 388, 398, 403, 404, 419, 424, 442, 439, 430, 428, 445, 456, 463, 443,
    ],
  },
  'darkcoil': {
    'basePrice': 9,
    'currentPrice': 10,
    'priceHistory': [
      10, 6, 8, 12, 15, 16, 15, 16, 16, 13, 15, 12, 8, 6, 7, 6, 8, 12, 13, 12,
      11, 10, 12, 9, 10, 13, 14, 12, 14, 16,
    ],
  },
  'metashroom': {
    'basePrice': 495,
    'currentPrice': 342,
    'priceHistory': [
      342, 358, 339, 361, 356, 343, 342, 360, 349, 358, 348, 370, 384, 397, 383,
      363, 378, 380, 394, 412, 395, 389, 406, 403, 423, 428, 407, 401, 380, 358,
    ],
  },
  'tranceloom': {
    'basePrice': 711,
    'currentPrice': 228,
    'priceHistory': [
      228, 221, 218, 237, 213, 229, 250, 242, 264, 250, 261, 249, 237, 266, 293,
      307, 281, 309, 310, 316, 292, 291, 320, 336, 358, 347, 338, 350, 359, 332,
    ],
  },
  'trickelpus': {
    'basePrice': 9,
    'currentPrice': 14,
    'priceHistory': [
      14, 16, 16, 13, 16, 12, 14, 10, 13, 9, 7, 8, 10, 9, 11, 9, 13, 11, 12, 15,
      12, 14, 13, 16, 16, 16, 16, 13, 11, 12,
    ],
  },
  'rockmole': {
    'basePrice': 495,
    'currentPrice': 716,
    'priceHistory': [
      716, 706, 709, 687, 707, 720, 725, 724, 735, 737, 749, 740, 731, 721, 740,
      728, 730, 724, 721, 711, 695, 713, 725, 715, 695, 699, 684, 693, 682, 697,
    ],
  },
  'achromatic ooze': {
    'basePrice': 711,
    'currentPrice': 416,
    'priceHistory': [
      416, 422, 445, 438, 416, 444, 437, 407, 437, 422, 430, 421, 402, 406, 395,
      385, 387, 412, 392, 367, 356, 350, 325, 317, 294, 309, 306, 315, 285, 296,
    ],
  },
  'sporesprawl1': {
    'basePrice': 9,
    'currentPrice': 13,
    'priceHistory': [
      13, 14, 11, 13, 12, 16, 16, 16, 15, 16, 12, 14, 12, 16, 13, 14, 15, 14,
      15, 11, 14, 16, 16, 12, 9, 5, 3, 2, 2, 5,
    ],
  },
  'sporesprawl2': {
    'basePrice': 495,
    'currentPrice': 670,
    'priceHistory': [
      670, 659, 653, 635, 656, 662, 648, 655, 650, 664, 649, 659, 657, 638, 617,
      615, 612, 634, 619, 623, 608, 595, 597, 611, 589, 595, 600, 613, 627, 611,
    ],
  },
  'sporesprawl3': {
    'basePrice': 711,
    'currentPrice': 479,
    'priceHistory': [
      479, 491, 498, 521, 508, 538, 536, 548, 578, 586, 584, 576, 602, 611, 627,
      649, 641, 629, 616, 634, 645, 646, 638, 626, 599, 591, 620, 601, 589, 585,
    ],
  },
  'dusk orb': {
    'basePrice': 9,
    'currentPrice': 5,
    'priceHistory': [
      5, 3, 2, 2, 6, 3, 6, 2, 5, 7, 11, 7, 6, 3, 2, 2, 6, 8, 7, 3, 6, 8, 4, 5,
      9, 11, 12, 16, 15, 16,
    ],
  },
  'token2': {
    'basePrice': 495,
    'currentPrice': 233,
    'priceHistory': [
      233, 241, 227, 225, 238, 250, 268, 285, 297, 315, 309, 293, 289, 309, 303,
      304, 312, 330, 345, 360, 367, 346, 368, 375, 393, 381, 394, 395, 413, 403,
    ],
  },
  'token3': {
    'basePrice': 711,
    'currentPrice': 231,
    'priceHistory': [
      231, 218, 243, 220, 207, 221, 200, 229, 222, 197, 199, 196, 209, 192, 178,
      178, 191, 178, 195, 186, 195, 201, 199, 178, 191, 204, 190, 178, 178, 200,
    ],
  },
  'locus1': {
    'basePrice': 9,
    'currentPrice': 3,
    'priceHistory': [
      3, 4, 8, 11, 9, 10, 13, 14, 16, 16, 15, 11, 9, 12, 11, 10, 13, 14, 15, 16,
      14, 12, 15, 11, 14, 16, 16, 16, 13, 10,
    ],
  },
  'locus2': {
    'basePrice': 495,
    'currentPrice': 562,
    'priceHistory': [
      562, 567, 568, 567, 586, 581, 579, 563, 560, 558, 569, 555, 550, 556, 563,
      565, 582, 584, 588, 582, 583, 603, 610, 602, 581, 603, 616, 605, 598, 581,
    ],
  },
  'locus3': {
    'basePrice': 711,
    'currentPrice': 1180,
    'priceHistory': [
      1180, 1197, 1195, 1178, 1205, 1227, 1209, 1221, 1210, 1190, 1204, 1179,
      1191, 1167, 1175, 1165, 1136, 1120, 1124, 1139, 1132, 1150, 1180, 1189,
      1194, 1224, 1232, 1209, 1197, 1181,
    ],
  },
  'lightmare prism': {
    'basePrice': 9,
    'currentPrice': 3,
    'priceHistory': [
      3, 2, 5, 6, 2, 2, 6, 4, 2, 2, 2, 2, 4, 5, 8, 10, 7, 11, 10, 8, 5, 2, 2, 2,
      2, 2, 2, 4, 3, 5,
    ],
  },
  'vestige2': {
    'basePrice': 495,
    'currentPrice': 497,
    'priceHistory': [
      497, 479, 461, 441, 419, 422, 429, 434, 446, 430, 419, 427, 420, 431, 412,
      399, 383, 397, 404, 396, 406, 408, 425, 430, 424, 430, 442, 453, 451, 438,
    ],
  },
  'vestige3': {
    'basePrice': 711,
    'currentPrice': 819,
    'priceHistory': [
      819, 849, 834, 843, 821, 808, 797, 798, 781, 787, 802, 799, 820, 839, 847,
      846, 841, 854, 837, 828, 818, 844, 851, 875, 855, 832, 811, 804, 776, 783,
    ],
  },
};

export const getPrices = () => prices;

export const getPrice = (blightsourceName) => {
  return prices[blightsourceName];
};

export const getNewBlightsourcePrice = (blightsourceName, price) => {
  const blightsource = getBlightsourceByName(blightsourceName);
  const { basePrice, priceHistory } = price;
  let maxMult = 1;
  let minMult = 1;

  switch (blightsource.volatility) {
    case 'volatile':
      maxMult = 1.75;
      minMult = 0.25;
      break;
    case 'fluid':
      maxMult = 1.5;
      minMult = 0.5;
      break;
    case 'stable':
      maxMult = 1.25;
      minMult = 0.75;
      break;
    case 'fixed':
      break;
    default:
      break;
  }

  const minNum = Math.round(basePrice * minMult);
  const maxNum = Math.round(basePrice * maxMult);
  const directionMult = Math.random() >= 0.5 ? 1 : -1;
  const newNum = clamp(
    getRandomInt(1, 31 - blightsource.rarity + 1) * directionMult +
      priceHistory[priceHistory.length - 1],
    minNum,
    maxNum
  );

  const newPrice = {
    basePrice,
    currentPrice: newNum,
    priceHistory: [...priceHistory, newNum],
  };

  return newPrice;
};

export const updatePrices = () => {
  const newPrices = {};

  for (const blightsourceName in prices) {
    if (prices.hasOwnProperty(blightsourceName)) {
      const newPrice = getNewBlightsourcePrice(
        blightsourceName,
        prices[blightsourceName]
      );
      newPrices[blightsourceName] = newPrice;
    }
  }

  prices = newPrices;
};

export const getRecentPrices = (price, numRecent = 30) => {
  const priceArr = [];
  const len = price.priceHistory.length;
  for (let i = len - (1 + numRecent); i < len; i++) {
    priceArr.push(price.priceHistory[i]);
  }

  return priceArr;
};

export const getBlightsourceStats = (price, round = false) => {
  const recentPrices = getRecentPrices(price);
  const averagePrice = getMean(recentPrices);
  const overallAveragePrice = getMean(price.priceHistory);
  const medianPrice = getMedian(recentPrices);
  const overallMedianPrice = getMedian(price.priceHistory);
  const difference = price.currentPrice - recentPrices[0];
  const overallDifference = price.currentPrice - price.basePrice;
  const percentage = (difference / recentPrices[0]) * 100;
  const overallPercentage = (overallDifference / price.basePrice) * 100;
  const performance = round
    ? Math.round((percentage + Number.EPSILON) * 100) / 100
    : percentage;
  const overallPerformance = round
    ? Math.round((overallPercentage + Number.EPSILON) * 100) / 100
    : overallPercentage;

  const performanceArr = [];

  for (let i = 0; i < recentPrices.length; i++) {
    const currentOverallDifference = recentPrices[i] - price.basePrice;
    const currentOverallPercentage =
      (currentOverallDifference / price.basePrice) * 100;
    const currentOverallPerformance = round
      ? Math.round((currentOverallPercentage + Number.EPSILON) * 100) / 100
      : currentOverallPercentage;
    performanceArr.push(currentOverallPerformance);
  }

  return {
    performance,
    overallPerformance,
    averagePrice,
    medianPrice,
    overallAveragePrice,
    overallMedianPrice,
    performanceArr,
  };
};

const getCombinedBlightsourceStats = (
  prices,
  blightsourceNames,
  round = false
) => {
  const recentNum = 30;
  let performance = 0;
  let overallPerformance = 0;
  let averagePrice = 0;
  let medianPrice = 0;
  let overallAveragePrice = 0;
  let overallMedianPrice = 0;
  const performanceArr = [];
  for (let i = 0; i < recentNum; i++) {
    performanceArr.push(0);
  }
  const nameArr = blightsourceNames.map((s) => s.toLowerCase());

  for (let i = 0; i < nameArr.length; i++) {
    const stats = getBlightsourceStats(prices[nameArr[0]], false);
    performance += stats.performance;
    overallPerformance += stats.overallPerformance;
    averagePrice += stats.averagePrice;
    medianPrice += stats.medianPrice;
    overallAveragePrice += stats.overallAveragePrice;
    overallMedianPrice += stats.overallMedianPrice;
    stats.performanceArr.forEach((perf, i) => (performanceArr[i] += perf));
  }

  performance /= nameArr.length;
  overallPerformance /= nameArr.length;
  averagePrice /= nameArr.length;
  medianPrice /= nameArr.length;
  overallAveragePrice /= nameArr.length;
  overallMedianPrice /= nameArr.length;
  performanceArr.map((perf) => (perf /= perf.length));

  if (round) {
    performance = Math.round((performance + Number.EPSILON) * 100) / 100;
    overallPerformance =
      Math.round((overallPerformance + Number.EPSILON) * 100) / 100;
    averagePrice = Math.round((averagePrice + Number.EPSILON) * 100) / 100;
    medianPrice = Math.round((medianPrice + Number.EPSILON) * 100) / 100;
    overallAveragePrice =
      Math.round((overallAveragePrice + Number.EPSILON) * 100) / 100;
    overallMedianPrice =
      Math.round((overallMedianPrice + Number.EPSILON) * 100) / 100;
    performanceArr.map(
      (perf) => Math.round((perf + Number.EPSILON) * 100) / 100
    );
  }

  return {
    performance,
    overallPerformance,
    averagePrice,
    medianPrice,
    overallAveragePrice,
    overallMedianPrice,
    performanceArr,
  };
};

export const getCombinedSubcategoryStats = (
  subcategory,
  prices,
  round = false
) => {
  const blightsourceNameArr = getBlightsourceNamesBySubcategory(subcategory);
  return getCombinedBlightsourceStats(blightsourceNameArr, prices, round);
};

export const getCombinedCategoryStats = (category, prices, round = false) => {
  const blightsourceNameArr = getBlightsourceNamesByCategory(category);
  return getCombinedBlightsourceStats(blightsourceNameArr, prices, round);
};
