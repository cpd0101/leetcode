/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 1) return 0;
    var i = 0;
    var j = prices.length - 1;
    var low = prices[i];
    var high = prices[j];
    while (i < j) {
        if (low > prices[i + 1]) {
            low = prices[i + 1];
            i++;
        } else if (high < prices[j - 1]) {
            high = prices[j - 1];
            j--;
        } else if (prices[i + 1] < high) {
            i++;
        } else if (prices[j - 1] > low) {
            j--;
        } else {
            if (high - prices[j - 1] > prices[i + 1] - low) {
                i++;
            } else {
                j--;
            }
        }
    }
    return high - low;
};