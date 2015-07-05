/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    for (var i = 1; i <= k; i++) {
        len = nums.unshift(nums[len - i]);
    }
    nums.splice(-k, k);
};



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    var l = len - k % len;
    for (var i = 0; i < l; i++) {
        nums.push(nums[i]);
    }
    nums.splice(0, l);
};