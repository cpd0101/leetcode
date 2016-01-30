/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var total = 0;
    var max = -1;
    var min = 1;
    var maxSum = -1;
    var minSum = 1;
    var start = 0;
    var startMax = 0;
    var endMin = 0;
    for (var i = 0; i < gas.length; i++) {
        var diff = gas[i] - cost[i];
        total += diff;
        if (maxSum < 0) {
            maxSum = diff;
            start = i;
        } else {
            maxSum += diff;
        }
        if (maxSum > max) {
            max = maxSum;
            startMax = start;
        }
        if (minSum > 0) {
            minSum = diff;
        } else {
            minSum += diff;
        }
        if (minSum < min) {
            min = minSum;
            endMin = i;
        }
    }
    if (total < 0) {
        return -1;
    }
    return max >= (total - min) ? startMax : (endMin + 1) % gas.length;
};