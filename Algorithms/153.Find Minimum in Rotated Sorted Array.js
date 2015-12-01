/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    while (start < end) {
        var mid = parseInt((start + end) / 2);
        if (nums[mid] > nums[end]) {
            if (mid === start) {
                start = end;
                end = end;
                break;
            } 
            start = mid;
            end = end;
        } else {
            start = start;
            end = mid;
        }
    }
    return nums[start];
};