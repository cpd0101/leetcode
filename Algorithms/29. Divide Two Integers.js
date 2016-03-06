/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0 || dividend === 0) {
        return 0;
    } else {
        var max = Math.pow(2, 31) - 1;
        var ret = parseInt(dividend / divisor);
        if (ret > max) {
            ret = max;
        } 
        return ret;
    }
};