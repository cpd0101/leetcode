/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
	var str = [];
	var start,end;
	if (nums.length < 1) {
		return str;
	} else {
		start = nums[0];
    	end = nums[0];
	}
    for (var i = 1; i < nums.length; i++) {
    	if (end + 1 == nums[i]) {
    		end = nums[i];
    	} else {
    		if (start == end) {
    			str.push(start + '');
    		} else {
    			str.push(start + '->' + end);
    		}
    		start = nums[i];
    		end = nums[i];
    	}
    }
    if (start == end) {
		str.push(start + '');
	} else {
		str.push(start + '->' + end);
	}
    return str;
};