/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var sum = Number.MAX_VALUE;
    var min = Number.MAX_VALUE;
    for (var i = 0; i < nums.length; i++) {
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            var temp = nums[i] + nums[j] + nums[k];
            var span = temp - target;
            if (span === 0) {
                return target;
            } else if (span < 0) {
                j++;
            } else {
                k--;
            }
            if (Math.abs(span) < min) {
                min = Math.abs(span);
                sum = temp;
            }
        }
    }
    return sum;
};