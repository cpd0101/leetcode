/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
    var gcd = function (a, b) {
        if (a === 0) {
            return b;
        }
        return gcd(b % a, a);
    };
    var c = gcd(Math.min(x, y), Math.max(x, y));
    if (c === 0) {
        return z === 0;
    }
    return z % c === 0 && z <= x + y;
};