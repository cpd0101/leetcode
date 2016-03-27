/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var left = [];
    var right = [];

    if (prices.length === 0) {
        return 0;
    }

    var min = prices[0];
    left[0] = 0;
    for (var i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        left[i] = Math.max(left[i - 1], prices[i] - min);
    }

    var max = prices[prices.length - 1];
    right[prices.length - 1] = 0;
    for (var i = prices.length - 2; i >= 0; i--) {
        max = Math.max(max, prices[i]);
        right[i] = Math.max(right[i + 1], max - prices[i]);
    }

    var sum = 0;
    for (var i = 0; i < prices.length; i++) {
        sum = Math.max(sum, left[i] + right[i]);
    }

    return sum;
};