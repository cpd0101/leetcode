/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (n) {
        var a = n % 2;
        if (a) {
            if (n === 1) {
                return true;
            } else {
                return false;
            }
        }
        n = parseInt(n / 2);
    }
    return false;
};