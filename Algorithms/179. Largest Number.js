/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(function (a, b) {
        a = a + '';
        b = b + '';
        var ret = 1;
        var big = a > b ? a : b;
        var small = a < b ? a : b;
        if (big.indexOf(small) === 0 && small + big > big + small) {
            ret = -1;
        }
        if (a < b) {
            return ret;
        } else if (a > b) {
            return -1 * ret;
        } else {
            return 0;
        }
    });
    var ret = '';
    for (var i = 0; i < nums.length; i++) {
        if (ret || nums[i] !== 0) {
            ret += nums[i];
        }
    }
    return ret ? ret : '0';
};
