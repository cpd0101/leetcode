/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    var res = 0;
    var min = Math.min.apply(null, nums);
    for (var i = 0; i < nums.length; i++) {
        res += nums[i] - min;
    }
    return res;
};