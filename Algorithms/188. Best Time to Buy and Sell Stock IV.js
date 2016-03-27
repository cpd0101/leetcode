/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    var maybe = [];
    var must = [];
    if (prices.length < 2) {
        return 0;
    }
    var maxProfit2 = function (prices) {
        var max = 0;
        for (var i = 1; i < prices.length; i++) {
            var diff = prices[i] - prices[i - 1];
            if (diff > 0) {
                max += diff;
            }
        }
        return max;
    };
    if (k >= prices.length) {
        return maxProfit2(prices);
    }
    for (var i = 0; i < prices.length; i++) {
        maybe[i] = [];
        must[i] = [];
        maybe[i][0] = 0;
        must[i][0] = 0;
    }
    for (var j = 0; j <= k; j++) {
        maybe[0][j] = 0;
        must[0][j] = 0;
    }
    for (var i = 1; i < prices.length; i++) {
        var diff = prices[i] - prices[i - 1];
        for (var j = 1; j <= k; j++) {
            maybe[i][j] = Math.max(maybe[i - 1][j] + diff, must[i - 1][j - 1] + Math.max(diff, 0));
            must[i][j] = Math.max(maybe[i][j], must[i - 1][j]);
        }
    }
    return must[prices.length - 1][k];
};