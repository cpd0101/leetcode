/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var max = 0;
    if (nums.length) {
        max = nums[0];
    }
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum;
        } else if (nums[i] > max) {
            max = nums[i];
            sum = nums[i];
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};