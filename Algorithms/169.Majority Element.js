/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = [];
    var len = nums.length;
    var half = Math.floor(len / 2);
    for (var i = 0; i < nums.length; i++) {
    	var temp = map[nums[i]];
    	if (temp) {
    		if (temp >= half) {
    			return nums[i];
    		} else {
    			map[nums[i]]++;
    		}
    	} else {
    		map[nums[i]] = 1;
    	}
    }
    return nums[0];
};