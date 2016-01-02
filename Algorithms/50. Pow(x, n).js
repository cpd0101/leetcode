/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var ret = 1;
    if (n < 0) {
        x = 1 / x;
        n = n * -1;
    }
    if (Math.abs(x) < 1) {
        for (var i = 0; i < n; i++) {
            ret *= x;
            if (ret === 0) {
                return 0;
            }
        }
    } else if (x === 1) {
        return 1;
    } else if (x === -1) {
        if (n % 2) {
            return -1;
        } else {
            return 1;
        }
    } else {
        for (var i = 0; i < n; i++) {
            ret *= x;
        }
    }
    return ret;
};