/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var ret = [[]];
    nums.sort();
    for (var i = 0; i < nums.length; i++) {
        var arr = [];
        var flag = (nums[i - 1] === nums[i]);
        var str = '';
        for (var j = 0; j < ret.length; j++) {
            var temp = ret[j];
            for (var k = 0; k < temp.length; k++) {
                var clone = temp.slice(0);
                clone.splice(k, 0, nums[i]);
                var tempStr = clone.join() + ' ';
                if (flag) {
                    if (str.indexOf(tempStr) === -1) {
                        arr.push(clone);
                        str += tempStr;
                    }
                } else {
                    arr.push(clone);
                    str += tempStr;
                }
            }
            temp.push(nums[i]);
            var tempStr = temp.join() + ' ';
            if (flag) {
                if (str.indexOf(tempStr) === -1) {
                    arr.push(temp);
                    str += tempStr;
                }
            } else {
                arr.push(temp);
                str += tempStr;
            }
        }
        ret = arr;
    }
    return ret;
};