/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var max = nums.length ? 1 : 0;
    var len = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] - nums[ i - 1] === 1) {
            if (++len > max) {
                max = len;
            }
        } else if (nums[i] !== nums[ i - 1]) {
            len = 1;
        }
    }
    return max;
};