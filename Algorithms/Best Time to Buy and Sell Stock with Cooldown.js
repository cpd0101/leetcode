/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    var buy = [];
    var sell = [];
    buy[0] = -prices[0];
    buy[1] = Math.max(buy[0], -prices[1]);
    sell[0] = 0;
    sell[1] = Math.max(sell[0], buy[0] + prices[1]);

    for (var i = 2; i < prices.length; i++) {
        buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    }

    return sell[prices.length - 1];
};