/**
 * @param {number} n
 * @return {number[]}
 */

var cache = [];

var grayCode = function(n) {
    var ret = [];
    if (n === 0) {
        ret.push(0);
    } else {
        var temp = [];
        if (cache[n - 1] !== undefined) {
            temp = cache[n - 1];
        } else {
            temp = grayCode(n - 1);
            cache[n - 1] = temp;
        }
        ret = ret.concat(temp);
        var base = Math.pow(2, n - 1);
        for (var i = temp.length - 1; i > -1; i--) {
            ret.push(base + temp[i]);
        }
    }
    return ret;
};