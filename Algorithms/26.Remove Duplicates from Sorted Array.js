/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (var i = 1; i < nums.length;) {
        if (nums[i - 1] === nums[i]) {
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[i - 1] !== nums[j]) {
                    break;
                }
            }
            nums.splice(i, j - i);
        } else {
            i++
        }
    }
    return nums.length;
};