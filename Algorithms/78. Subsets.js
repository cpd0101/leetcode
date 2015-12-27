/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var subsetsSorted = function (nums) {
        if (nums.length === 0) {
            return [[]];
        }
        var ret = subsetsSorted(nums.slice(1));
        var len = ret.length;
        for (var i = 0; i < len; i++) {
            ret.push([nums[0]].concat(ret[i]));
        }
        return ret;
    };
    nums.sort(function (a, b) {
        return a - b;
    });
    return subsetsSorted(nums).sort();
};