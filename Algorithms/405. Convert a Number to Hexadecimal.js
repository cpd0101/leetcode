/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    var convertToComplement = function (n) {
        if (n < 0) {
            var b = Math.pow(2, 32) + n;
            return b.toString(2);
        } else {
            return n.toString(2);
        }
    };
    if (num >= 0) {
        return num.toString(16);
    } else {
        return parseInt(convertToComplement(num), 2).toString(16);
    }
};