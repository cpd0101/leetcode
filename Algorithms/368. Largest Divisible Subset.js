/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    if (nums.length === 0) {
        return [];
    }
    nums.sort(function (a, b) {
        return a - b;
    });
    var dp = [];
    var max = 1;
    var index = 0;
    for (var i = 1; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                if (dp[j] === undefined) {
                    dp[j] = 1;
                }
                if (dp[i] === undefined) {
                    dp[i] = 1;
                }
                dp[i] = Math.max(dp[i], dp[j] + 1);
                if (dp[i] > max) {
                    max = dp[i];
                    index = i;
                }
            }
        }
    }
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[index] % nums[i] === 0) {
            res.push(nums[i]);
        }
    }
    return res;
};