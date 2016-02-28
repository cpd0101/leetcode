/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if (nums.length < 3) {
        return false;
    }
    var x = nums[0];
    var y = null;
    var max = Number.MAX_VALUE;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            return true;
        }
        if (y !== null) {
            if (nums[i] > y) {
                return true;
            } else {
                if (nums[i] > x) {
                    y = nums[i];
                } else if (nums[i] < x) {
                    x = nums[i];
                    if (y < max) {
                        max = y;
                    }
                    y = null;
                }
            }
        } else {
            if (nums[i] > x) {
                y = nums[i];
            } else {
                x = nums[i];
            }
        }
    }
    return false;
};