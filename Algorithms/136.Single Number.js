/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length; i+=2) {
        if (nums[i] !== nums[i + 1]) return nums[i];
    }
    return nums[nums.length -1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var ret = nums[0];
    for (var i = 1; i < nums.length; i++) {
        ret = ret ^ nums[i];
    }
    return ret;
};