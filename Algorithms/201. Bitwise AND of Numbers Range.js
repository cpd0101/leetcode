/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var bit = 0;
    while (m != n) {
        m >>= 1;
        n >>= 1;
        bit++;
    }
    return m << bit;
};