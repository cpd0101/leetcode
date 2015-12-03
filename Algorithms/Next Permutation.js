/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for (var i = nums.length - 2; i > -1; i--) {
        if (nums[i] < nums[i + 1]) {
            var arr = nums.slice(i + 1);
            arr.sort(function (a, b) {
                return a - b;
            });
            var isFound = false;
            for (var j = 0; j < arr.length; j++) {
                if (!isFound && arr[j] > nums[i]) {
                    nums[i + 1 + j] = nums[i];
                    nums[i] = arr[j];
                    isFound = true;
                } else {
                    nums[i + 1 + j] = arr[j];
                }
            }
            return;
        }
    }
    nums.sort(function (a, b) {
        return a - b;
    });
};