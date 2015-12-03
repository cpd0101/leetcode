/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var cache = [];
    for (var i = 0; i < prices.length; i++) {
        cache[i] = [];
    }
    var profit = function (start, end) {
        if (end - start < 2) {
            return prices[end] - prices[start] > 0 ? prices[end] - prices[start] : 0;
        } else {
            var max = 0;
            for (var i = start + 1; i < end; i++) {
                if (cache[start][i - 1] === undefined) {
                    cache[start][i - 1] = profit(start, i - 1);
                }

                if (cache[i + 1][end] === undefined) {
                    cache[i + 1][end] = profit(i + 1, end);
                }

                if (cache[start][i - 1] + cache[i + 1][end] > max) {
                    max = cache[start][i - 1] + cache[i + 1][end];
                }
            }
            return max;
        }
    };
    return profit(0, prices.length - 1);
};