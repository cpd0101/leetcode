/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

const findMaximizedCapital = function (k, w, profits, capital) {
  const sortedCapital = capital.map((value, index) => ({ value, index })).sort((a, b) => a.value - b.value);
  let index = sortedCapital.length;
  let sortedProfits = [];
  while (k-- > 0) {
    if (index === -1) {
      if (sortedProfits.length) {
        w += sortedProfits[0].value;
        sortedProfits.splice(0, 1);
      } else {
        return w;
      }
    } else if (index === 0) {
      return w;
    } else {
      let maxValue = 0;
      let maxIndex = 0;
      index = sortedCapital.findIndex(({ value, index }, i) => {
        if (value > w) {
          return true;
        }
        if (profits[index] > maxValue) {
          maxValue = profits[index];
          maxIndex = i;
        }
        return false;
      });
      w += maxValue;
      sortedCapital.splice(maxIndex, 1);
      if (index === -1) {
        sortedProfits = sortedCapital.map(({ value, index }) => ({ value: profits[index], index })).sort((a, b) => b.value - a.value);
      }
    }
  }
  return w;
};