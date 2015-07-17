/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var sum = 0;
    var arr = [];
    var minLen = nums.length;
    for (var i = 0; i < nums.length; i++) {
    	sum += nums[i];
    	arr.push(nums[i]);
    	if (minLen > arr.length && sum >= s) {
    		minLen = arr.length;
    	}
    	while(sum - arr[0] >= s) {
			sum -= arr[0];
			arr.shift();
			if (minLen > arr.length) {
				minLen = arr.length;
			}
		}
    }
    if (sum >= s) {
    	return minLen;
    }
    return 0;
};