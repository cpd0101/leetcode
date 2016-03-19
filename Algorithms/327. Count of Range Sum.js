/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
    var n = 0;
    var temp = [];
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        temp[i] = sum + nums[i];
        sum = temp[i];
    }
    temp.sort(function (a, b) {
        return a - b;
    });
    var findUpperIndex = function (arr, value) {
        var start = 0;
        var end = arr.length - 1;
        while (start < end - 1) {
            var mid = parseInt((start + end) / 2);
            if (arr[mid] < value) {
                start = mid;
            } else {
                end = mid;
            }
        }
        if (arr[start] >= value) {
            return start;
        }
        if (arr[end] >= value) {
            return end;
        } else {
            return arr.length;
        }
    };
    var findLowerIndex = function (arr, value) {
        var start = 0;
        var end = arr.length - 1;
        while (start < end - 1) {
            var mid = parseInt((start + end) / 2);
            if (arr[mid] > value) {
                end = mid;
            } else {
                start = mid;
            }
        }
        if (arr[end] <= value) {
            return end;
        }
        if (arr[start] <= value) {
            return start;
        } else {
            return -1;
        }
    };
    sum = 0;
    for (i = 0; i < nums.length; i++) {
        var start = findUpperIndex(temp, lower);
        var end = findLowerIndex(temp, upper);
        if (start <= end) {
            n += (end - start + 1);
        }
        lower += nums[i];
        upper += nums[i];
        if (lower > upper) {
            var t = lower;
            lower = upper;
            upper = t;
        }
        sum += nums[i];
        temp.splice(findUpperIndex(temp, sum), 1);
    }
    return n;
};