/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var combinationSum3WithMin = function (k, n, min) {
        var ret = [];
        for (var i = min; i < 10; i++) {
            if (k === 1) {
                if (i === n) {
                    ret.push([i]);
                    return ret;
                }
                if (i > n) {
                    break;
                }
            } else {
                var arr = combinationSum3WithMin(k - 1, n - i, i + 1);
                for (var j = 0; j < arr.length; j++) {
                    arr[j].unshift(i);
                    ret.push(arr[j]);
                }
            }
        }
        return ret;
    };
    return combinationSum3WithMin(k, n, 1);
};