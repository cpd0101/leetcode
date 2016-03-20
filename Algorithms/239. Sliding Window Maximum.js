/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    var max = Number.MAX_VALUE;
    var index = -1;
    var len = nums.length - k + 1;
    var ret = [];
    if (k === nums.length) {
        if (nums.length === 0) {
            return ret;
        }
        max = Number.MIN_VALUE;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }
        }
        ret.push(max);
        return ret;
    }
    for (var i = 0; i < len; i++) {
        if (nums[i + k - 1] >= max) {
            max = nums[i + k - 1];
            index = i + k - 1;
        } else if (i > index) {
            max = nums[i];
            for (var j = 1; j < k; j++) {
                if (nums[i + j] > max) {
                    max = nums[i + j];
                    index = i + j;
                }
            }
        }
        ret.push(max);
    }
    return ret;
};