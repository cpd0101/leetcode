/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    var subsetsWithDupSorted = function (nums) {
        if (nums.length === 0) {
            return [[]];
        }
        var ret = subsetsWithDupSorted(nums.slice(1));
        var len = ret.length;
        var flag = false;
        if (nums.lastIndexOf(nums[0]) !== 0) {
            flag = true;
        }
        var str = ret.join(' ') + ' ';
        for (var i = 0; i < len; i++) {
            var temp = [nums[0]].concat(ret[i]);
            var tempStr = temp.join() + ' ';
            if (!flag || str.indexOf(tempStr) === -1) {
                ret.push(temp);
                str += tempStr;
            }
        }
        return ret;
    };
    nums.sort(function (a, b) {
        return a - b;
    });
    return subsetsWithDupSorted(nums).sort();
};