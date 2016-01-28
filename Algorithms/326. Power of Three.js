/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n % 3 || n === 0) {
        if (n === 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return isPowerOfThree(parseInt(n / 3));
    }
};