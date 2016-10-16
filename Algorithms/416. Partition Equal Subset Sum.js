/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % 2) {
        return false;
    }
    sum = sum / 2;
    var dp = [1];
    for (var i = 0; i < nums.length; i++) {
        for (var j = sum - nums[i]; j >= 0; j--) {
            if (dp[j]) {
                dp[j + nums[i]] = 1;
            }
        }
    }
    return dp[sum] === 1;
};