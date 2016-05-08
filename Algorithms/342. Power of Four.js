/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    if (num < 1) {
        return false;
    }
    var s = num.toString(2);
    var c = 0;
    for (var i = s.length - 1; i > -1; i--) {
        if (s[i] === '1') {
            if ((s.length - 1 - i) % 2) {
                return false;
            }
            if (c++) {
                return false;
            }
        }
    }
    return true;
};