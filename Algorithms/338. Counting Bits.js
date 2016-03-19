/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    var ret = [0];
    for (var i = 1; i <= num; i++) {
        ret.push(ret[i >> 1] + (i & 1));
    }
    return ret;
};