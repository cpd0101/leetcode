/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var median = parseInt(nums.length / 2);
    var ans = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i < median) {
            ans += nums[median] - nums[i];
        } else {
            ans += nums[i] - nums[median];
        }
    }
    return ans;
};