export const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(getRandom(min, max)); //The maximum is exclusive and the minimum is inclusive
}

export const toTitleCase = (s) =>
  s && s.length >= 1 ? s.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') : s;
