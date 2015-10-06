/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var len = nums.length - 1;
    var ret = [];
    for (var i = 0; i < len; i++) {
        if (nums[i] != nums[i + 1]) {
            ret.push(nums[i]);
            if (ret.length === 2) return ret;
        } else {
            i++;
        }
    }
    ret.push(nums[len]);
    return ret;
};