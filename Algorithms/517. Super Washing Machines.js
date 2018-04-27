/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
  var len = machines.length;
  var sum = 0;
  for (var i = 0; i <len; i++) {
    sum += machines[i];
  }
  if (sum % len) {
    return -1;
  }
  var target = sum / len;
  var min = 0;
  var balance = 0;
  for (var i = 0; i <len; i++) {
    balance += machines[i] - target;
    min = Math.max(min, Math.max(machines[i] - target, Math.abs(balance)));
  }
  return min;
};