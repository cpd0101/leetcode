/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = [];
    var sum = 0;
    while (n) {
        var a = n % 10;
        var b = parseInt(n / 10);
        sum += a * a;
        if (b) {
            n = b;
        } else {
            if (sum === 1) {
                return true;
            } else {
                if (map[sum]) {
                    return false;
                } else {
                    map[sum] = 1;
                    n = sum;
                    sum = 0;
                }
            }
        }
    }
};