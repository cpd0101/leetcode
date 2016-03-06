/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    var a = numerator;
    var b = denominator;
    var ret = '';
    var c = 0;
    if (Math.abs(a) >= Math.abs(b)) {
        c = parseInt(a / b);
    }
    ret += c;
    a = a % b;
    if (a) {
        if (c === 0 && a * b < 0) {
            ret = '-' + ret;
        }
        ret += '.';
        a = Math.abs(a);
        b = Math.abs(b);
    } else {
        return ret;
    }
    var map = {};
    while (a) {
        a *= 10;
        c = 0;
        if (a >= b) {
            c = parseInt(a / b);
        }
        a = a % b;
        if (map[[c, a]] !== undefined) {
            return ret.slice(0, map[[c, a]]) + '(' + ret.slice(map[[c, a]]) + ')';
        } else {
            map[[c, a]] = ret.length;
        }
        ret += c;
    }
    return ret;
};