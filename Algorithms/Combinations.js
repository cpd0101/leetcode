/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var combineWithMin = function (n, k, min) {
        var ret = [];
        for (var i = min; i <= n; i++) {
            if (k === 1) {
                ret.push([i]);
            } else {
                var arr = combineWithMin(n, k - 1, i + 1);
                for (var j = 0; j < arr.length; j++) {
                    arr[j].unshift(i);
                    ret.push(arr[j]);
                }
            }
        }
        return ret;
    };
    return combineWithMin(n, k, 1);
};