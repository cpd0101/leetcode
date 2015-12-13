/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length < 1) {
        return 0;
    }
    var ret = [nums[0]];
    var max = 1;
    for (var i = 1; i < nums.length; i++) {
        if (ret[ret.length - 1] > nums[i]) {
            if (ret.length === 1) {
                ret[0] = nums[i];
            } else {
                for (var j = 0; j < ret.length; j++) {
                    if (ret[j] >= nums[i]) {
                        var len = lengthOfLIS(nums.slice(i));
                        if (len + j > max) {
                            max = len + j;
                        }
                        break;
                    }
                }
            }
        } else {
            if (ret[ret.length - 1] < nums[i]) {
                ret.push(nums[i]);
            }
        }
    }
    return ret.length > max ? ret.length : max;
};