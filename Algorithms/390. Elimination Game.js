/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
    var a = 1;
    var p = 1;
    var cnt = 0;
    while (n > 1) {
        n = parseInt(n / 2);
        cnt += 1;
        p *= 2;
        if (cnt % 2) {
            a += p * (n - 1) + p / 2;
        } else {
            a -= p * (n - 1) + p / 2;
        }
    }
    return a;
};