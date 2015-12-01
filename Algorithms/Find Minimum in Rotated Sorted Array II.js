/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    while (start < end) {
        var mid = parseInt((start + end + 1) / 2);
        if (nums[mid] === nums[start] && nums[mid] !== nums[end]) {
            start = mid;
            end = end;
        } else if (nums[mid] === nums[start] && nums[mid] === nums[end]) {
            if (end === mid) {
                return nums[mid];
            } else {
                return Math.min(findMin(nums.slice(start, mid)), findMin(nums.slice(mid, end)));
            }
        } else if (nums[mid] > nums[end]) {
            start = mid;
            end = end;
        } else {
            if (end === mid) {
                if (nums[start] > nums[end]) {
                    start = end;
                    end = end;
                } else {
                    start = start;
                    end = start;
                }
                break;
            }
            start = start;
            end = mid;
        }
    }
    return nums[start];
};