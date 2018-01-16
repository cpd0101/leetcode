/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const map = tasks.reduce((last, c) => {
    const arr = last[c] || [];
    last[c] = arr.concat(c);
    return last;
  }, {});
  const max = Object.keys(map).reduce((last, key) => {
    const len = map[key].length;
    if (len > last.num) {
      return { num: len, count: 1 };
    }
    if (len === last.num) {
      return { num: len, count: last.count + 1 };
    }
    return last;
  }, { num: 0, count: 0 });
  return Math.max(tasks.length, (max.num - 1) * (n + 1) + max.count);
};