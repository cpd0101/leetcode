/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var gap = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > gap) {
            gap = nums[i] - nums[i - 1];
        }
    }
    return gap;
};