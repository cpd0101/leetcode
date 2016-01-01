/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var ret = [];
    for (var i = 0; i < nums.length; i++) {
        while (i < nums.length && nums[i] === nums[i - 1]) {
            i++;
        }
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                ret.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (sum < 0) {
                j++;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else {
                k--;
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            }
        }
    }
    return ret;
};