/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
    var pow = function (x, n) {
        if (n === 0) return 1;
        if (n === 1) return x % 1337;
        return pow(x % 1337, parseInt(n / 2)) * pow(x % 1337, n - parseInt(n / 2)) % 1337;
    };
    var res = 1;
    for (var i = 0; i < b.length; i++) {
        res = pow(res, 10) * pow(a, b[i]) % 1337;
    }
    return res;
};