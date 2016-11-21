/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    var min = Infinity;
    for (var i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i - 1]);
        if (min >= nums[i]) {
            continue;
        }
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i] && nums[j] > min) {
                return true;
            }
        }
    }
    return false;
};