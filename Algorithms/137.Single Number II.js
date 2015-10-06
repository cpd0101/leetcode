/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length; i+=3) {
        if (nums[i] != nums[i + 1]) return nums[i];
        if (nums[i + 1] != nums[i + 2]) return nums[i + 1];
    }
    return nums[nums.length -1];
};