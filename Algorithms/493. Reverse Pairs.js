/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return 0;
  }
  const mid = Math.floor(len / 2);
  let cnt = 0;
  const a = nums.slice(0, mid);
  const b = nums.slice(mid, nums.length);
  cnt += (reversePairs(a) + reversePairs(b));
  a.sort((a, b) => a - b);
  for (let j = 0; j < b.length; j++) {
    let low = 0;
    let high = a.length - 1;
    let pos = low;
    while (low < high) {
      pos = Math.floor((low + high) / 2);
      if (a[pos] / 2 > b[j]) {
        high = pos;
      } else {
        low = pos + 1;
        pos = low;
      }
    }
    if (a[pos] / 2 > b[j]) {
      cnt += (a.length - pos);
    }
  }
  return cnt;
};