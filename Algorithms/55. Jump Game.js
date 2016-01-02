/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var max = 0;
    var i = 0;
    var len = nums.length - 1;
    while (i <= max && max < len) {
        if (i + nums[i] > max) {
            max = i + nums[i];
        }
        i++;
    }

    if (max < len) {
        return false;
    } else {
        return true;
    }
};