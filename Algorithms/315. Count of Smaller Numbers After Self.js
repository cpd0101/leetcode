/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    var temp = nums.slice(0);
    temp.sort(function (a, b) {
        return a - b;
    });
    var ret = [];
    var findIndex = function (arr, value) {
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
        if (arr[start] === value) {
            return start;
        } else {
            return end;
        }
    };
    for (var i = 0; i < nums.length; i++) {
        var index = findIndex(temp, nums[i]);
        ret.push(index);
        temp.splice(index, 1);
    }
    return ret;
};