/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var q = [];
    var len = prices.length;
    if (len < 1) return 0;
    if (len > 100) return 0;
    var ret = [0];
    for (var i = 1; i < len; i++) {
        ret.push(0);
        for (var j = 0; j <= i; j++) {
            for (var k = j + 1; k <= i; k++) {
                if (prices[k] > prices[j]) {
                    var sum = ret[j] + prices[k] - prices[j];
                    if (sum > ret[k]) ret[k] = sum;
                }
            }
        }
        if (ret[i] < ret[i - 1]) ret[i] = ret[i - 1];
    }
    return ret[len - 1];
};