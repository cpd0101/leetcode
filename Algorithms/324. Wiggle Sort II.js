/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var mid = Math.ceil(nums.length / 2);
    var odd = nums.slice(0, mid);
    var even = nums.slice(mid);
    for (var i = 0; i < even.length; i++) {
        nums[2 * i] = odd[odd.length - i -1];
        nums[2 * i + 1] = even[even.length - i - 1];
    }
    if (nums.length % 2) {
        nums[2 * i] = odd[odd.length - i -1];
    }
};