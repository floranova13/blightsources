export const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(getRandom(min, max)); //The maximum is exclusive and the minimum is inclusive
}

export const toTitleCase = (s) =>
  s && s.length >= 1 ? s.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') : s;

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
export const clamp = (n, min, max) => {
  return Math.min(Math.max(n, min), max);
};