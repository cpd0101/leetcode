/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
	var max = -Infinity;
	var index = -1;
    for (var i = 0; i < nums.length; i++) {
    	if (nums[i] > max) {
    		max = nums[i];
    		index = i;
    	}
    }
    return index;
};