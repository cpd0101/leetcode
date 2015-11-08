/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var ret = 0;
    for (var i = 0; i < nums.length; i++) {
        ret = ret ^ i ^ nums[i];
    }
    return ret ^ i;
};