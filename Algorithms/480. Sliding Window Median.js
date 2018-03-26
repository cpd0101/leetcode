/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  const res = [];
  const odd = !!(k % 2);
  const mid = Math.floor(k / 2);
  for (let i = 0; i <= nums.length - k; i++) {
    let temp = nums.slice(i, i + k);
    temp.sort((a, b) => a - b);
    if (odd) {
      res.push(temp[mid]);
    } else {
      res.push((temp[mid] + temp[mid - 1]) / 2);
    }
  }
  return res;
};