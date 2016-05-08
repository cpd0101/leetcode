/**
 * @param {number} n
 * @return {number}
 */

var cache = {};

var integerBreak = function (n) {
    if (n < 4) {
        return n - 1;
    }
    var ret = 1;
    while (n > 2) {
        ret *= 3;
        n -= 3;
    }
    switch (n) {
        case 2:
            ret *= 2;
            break;
        case 1:
            ret = (ret / 3) * 4;
            break;
        default:
            break;
    }
    return ret;
};