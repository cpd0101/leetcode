/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    var max = [];
    for (var i = 0; i < nums.length; i++) {
        if (max.length === 3) {
            if (max[0] < nums[i] && max.indexOf(nums[i]) === -1) {
                max[0] = nums[i];
                max.sort(function (a, b) {
                    return a - b;
                });
            }
        } else {
            if (max.indexOf(nums[i]) === -1) {
                max.push(nums[i]);
                max.sort(function (a, b) {
                    return a - b;
                });
            }
        }
    }
    return max.length === 3 ? max[0] : max[max.length - 1];
};