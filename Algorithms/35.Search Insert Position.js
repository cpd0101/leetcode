/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while (low < high) {
        var mid = parseInt((low + high) / 2);
        if (nums[mid] < target) {
            if (mid > low) {
                low = mid;
            } else {
                low++;
            }
        } else if (nums[mid] === target) {
            return mid;
        } else {
            high = mid;
        }
    }
    if (nums[low] < target) {
        return low + 1;
    } else {
        return low;
    }
};