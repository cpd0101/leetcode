/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = 0;
    var count = 1;
    for (var i = 0; i < nums.length;) {
        if (nums[i - 1] === nums[i]) {
            if (count++ < 2) {
                len++;
                i++;
            } else {
                nums.splice(i, 1);
            }
        } else {
            len++;
            i++;
            count = 1;
        }
    }
    return len;
};