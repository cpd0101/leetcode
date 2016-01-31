/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var map = {};
    var len = nums.length;
    var gate = Math.floor(len / 3);
    var ret = [];
    for (var i = 0; i < len; i++) {
        var temp = map[nums[i]];
        if (temp) {
            if (gate && temp >= gate) {
                if (ret.indexOf(nums[i]) === -1 && ret.push(nums[i]) >= 2) {
                    return ret;
                }
            } else {
                map[nums[i]]++;
            }
        } else {
            map[nums[i]] = 1;
            if (gate === 0) {
                ret.push(nums[i]);
            }
        }
    }
    return ret;
};