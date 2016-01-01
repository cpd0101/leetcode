/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var temp = target - nums[i];
        var pos = nums.indexOf(temp);
        if (pos > -1 && pos === i) {
            pos = nums.indexOf(temp, pos + 1);
        }
        if (pos > -1) {
            return [i + 1, pos + 1];
        }
    }
};