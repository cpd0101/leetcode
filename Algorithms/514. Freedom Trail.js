/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */

var cache = {};

var find = function (ring, key) {
  if (!key) {
    return 0;
  }
  if (cache[`${ring}-${key}`]) {
    return cache[`${ring}-${key}`];
  }
  let min = Infinity;
  for (let i = 0; i < ring.length; i++) {
    if (key[0] === ring[i]) {
      min = Math.min(min, Math.min(i, ring.length - i) + 1 + find(ring.slice(i) + ring.slice(0, i), key.slice(1)));
    }    
  }
  cache[`${ring}-${key}`] = min;
  return min;
};
 
var findRotateSteps = function (ring, key) {
  cache = {};
  return find(ring, key);
};