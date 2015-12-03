/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var ret = [[]];
    for (var i = 0; i < nums.length; i++) {
        var arr = [];
        for (var j = 0; j < ret.length; j++) {
            var temp = ret[j];
            for (var k = 0; k < temp.length; k++) {
                var clone = temp.slice(0);
                clone.splice(k, 0, nums[i]);
                arr.push(clone);
            }
            temp.push(nums[i]);
            arr.push(temp);
        }
        ret = arr;
    }
    return ret;
};