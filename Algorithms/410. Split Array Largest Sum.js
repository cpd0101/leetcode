/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    var len = nums.length;
    var high = 0;
    for (var i = 0; i < len; i++) {
        high += nums[i];
    }
    var low = parseInt(high / m);
    while (low <= high) {
        var mid = parseInt((low + high) / 2);
        var n = m;
        var cnt = 0;
        var valid = true;
        for (var i = 0; i < len; i++) {
            if (nums[i] > mid) {
                valid = false;
                break;
            }
            if (cnt + nums[i] > mid) {
                n -= 1;
                cnt = 0;
            }
            cnt += nums[i];
            if (n === 0) {
                valid = false;
                break;
            }
        }
        if (valid) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};