/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var n = 1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            if (nums[i] === n - 1) {
                continue;
            }
            if (nums[i] !== n) {
                return n;
            }
            n++;
        }
    }
    return n;
};