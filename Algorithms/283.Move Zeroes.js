/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length;
    for(var i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1)[0]);
            i--;
            len--;
        }
    }
};