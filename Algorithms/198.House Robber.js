/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length;
    var max1 = 0;
    var max2 = 0;
    for (var i = 0; i < len; i++) {
        var temp = max1 + nums[i];
        max1 = max2;
        if (temp > max2) {
            max2 = temp;
        }
    }
    return max2;
};