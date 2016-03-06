/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    nums = [1].concat(nums, 1);
    var dp = [];
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        dp[i] = [];
    }
    for (var k = 2; k < n; k++) {
        for (var l = 0; l < n - k; l++) {
            var r = l + k;
            if (dp[l][r] === undefined) {
                dp[l][r] = 0; 
            }
            for (var m = l + 1; m < r; m++) {
                if (dp[l][m] === undefined) {
                    dp[l][m] = 0;
                }
                if (dp[m][r] === undefined) {
                    dp[m][r] = 0;
                }
                // 以最后被爆破的气球m为界限，把数组分为左右两个子区域
                dp[l][r] = Math.max(dp[l][r], nums[l] * nums[m] * nums[r] + dp[l][m] + dp[m][r]);
            }
        }
    }
    return dp[0][n - 1] || 0;
};