/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var len = nums.length;
    var map = [];
    for (var i = 0; i < len; i++) {
    	if (map[nums[i]] !== undefined) {
    		return true;
    	} else {
    		map[nums[i]] = i;
    	}
    }
    return false;
};