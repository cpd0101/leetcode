/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    while (start + 1 < end) {
        var mid = parseInt((start + end) / 2);
        if (nums[mid] > target) {
            if (nums[start] <= target) {
                end = mid;
            } else {
                if (nums[mid] < nums[end]) {
                    end = mid;
                } else {
                    start = mid;
                }
            }
        } else {
            if (nums[end] >= target) {
                start = mid;
            } else {
                if (nums[mid] > nums[start]) {
                    start = mid;
                } else {
                    end = mid;
                }
            }
        }
    }
    if (nums[start] === target) {
        return start;
    }
    if (nums[end] === target) {
        return end;
    }
    return -1;
};