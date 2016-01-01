/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    while (start < end) {
        var mid = parseInt((start + end) / 2);
        if (target < nums[mid]) {
            end = mid;
        } else {
            if (mid === start) {
                break;
            } else {
                start = mid;
            }
        }
    }
    var max;
    if (nums[start] === target) {
        max = start;
    }
    if (nums[end] === target) {
        max = end;
    }
    if (max != undefined) {
        var start = 0;
        var end = nums.length - 1;
        while (start < end) {
            var mid = parseInt((start + end) / 2);
            if (target > nums[mid]) {
                if (mid === start) {
                    break;
                } else {
                    start = mid;
                }
            } else {
                end = mid;
            }
        }
        var min;
        if (nums[end] === target) {
            min = end;
        }
        if (nums[start] === target) {
            min = start;
        }
        return [min, max];
    }
    return [-1, -1];
};