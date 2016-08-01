/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    var dp = [];
    dp[0] = 1;
    for (var i = 1; i <= target; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] = (dp[i] || 0) + (dp[i - nums[j]] || 0);
            }
        }
    }
    return dp[target] || 0;
};