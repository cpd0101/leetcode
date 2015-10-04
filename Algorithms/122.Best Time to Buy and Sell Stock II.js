/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length;
    if (len < 1) return 0;
    var ret = [0];
    var min = 0;
    for (var i = 1; i < len; i++) {
        ret.push(ret[i - 1]);
        if (prices[min] < prices[i]) {
            for (var j = 0; j < i; j++) {
                if (prices[i] > prices[j]) {
                    var sum = ret[j] + prices[i] - prices[j];
                    if (sum > ret[i]) ret[i] = sum;
                }
            }
        } else {
            min = i;
        }
    }
    return ret[len - 1];
};