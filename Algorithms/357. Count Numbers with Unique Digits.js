/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    var f = function (k) {
        var res = 9;
        for (var i = 9; i > 10 - k; i--) {
            res *= i;
        }
        return res;
    };
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res += f(i);
    }
    return res;
};