/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    var delta = nums[1] - nums[0];
    var ans = 1 + (delta !== 0);
    for (var i = 2; i < nums.length; i++) {
        var newDelta = nums[i] - nums[i - 1];
        if (newDelta && newDelta * delta <= 0) {
            ans++;
            delta = newDelta;
        }
    }
    return ans;
};