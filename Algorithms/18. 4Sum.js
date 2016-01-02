/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var ret = [];
    var str = '';
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length - 2; j++) {
            var k = j + 1;
            var l = nums.length - 1;
            while (k < l) {
                var sum = nums[i] + nums[j] + nums[k] + nums[l] - target;
                if (sum === 0) {
                    var tempStr = [nums[i], nums[j], nums[k], nums[l]].join() + ' ';
                    if (str.indexOf(tempStr) === -1) {
                        ret.push([nums[i], nums[j], nums[k], nums[l]]);
                        str += tempStr;
                    }
                    k++;
                    l--;
                    while (j < k && nums[k] === nums[k - 1]) {
                        k++;
                    }
                    while (j < k && nums[l] === nums[l + 1]) {
                        l--;
                    }
                } else if (sum < 0) {
                    k++;
                    while (j < k && nums[k] === nums[k - 1]) {
                        k++;
                    }
                } else {
                    l--;
                    while (j < k && nums[l] === nums[l + 1]) {
                        l--;
                    }
                }
            }
        }
    }
    return ret;
};