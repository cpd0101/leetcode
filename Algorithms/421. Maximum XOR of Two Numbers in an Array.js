/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var res = nums[i] ^ nums[j];
            if (res > max) {
                max = res;
            }
        }
    }
    return max;
};