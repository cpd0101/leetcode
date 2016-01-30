/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    var miss = 1;
    var ret = 0;
    var i = 0;
    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i++];
        } else {
            miss += miss;
            ret++;
        }
    }
    return ret;
};