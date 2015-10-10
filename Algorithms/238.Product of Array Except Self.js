/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    var left = new Array(len);
    var right = new Array(len);
    left[0] = right[0] = 1;
    for (var i = 1; i < len; i++) {
        left[i] = left[i - 1] * nums[i - 1];
        right[i] = right[i - 1] * nums[len - i];
    }
    nums[0] = right[len - 1];
    nums[len - 1] = left[len - 1]; 
    for (i = len - 2; i > 0; i--) {
        nums[i] = left[i] * right[len - 1 - i];
    }
    return nums;
};