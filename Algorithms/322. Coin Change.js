/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort(function (a, b) {
        return a - b;
    });
    var dp = [0];
    for (var i = 1; i <= amount; i++) {
        var min = amount + 1;
        for (var j = 0; j < coins.length; j++) {
            if (i < coins[j]) {
                break;
            }
            if (dp[i - coins[j]] != -1) {
                min = Math.min(min, dp[i - coins[j]] + 1);
            }
        }
        dp[i] = min === amount + 1 ? -1 : min;
    }
    return dp[amount];
};