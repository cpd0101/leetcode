/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var len = nums.length;
    var map = [];
    for (var i = 0; i < len; i++) {
    	var temp = map[nums[i]];
    	if (temp != undefined && i - temp <=k) {
    		return true;
    	} else {
    		map[nums[i]] = i;
    	}
    }
    return false;
};