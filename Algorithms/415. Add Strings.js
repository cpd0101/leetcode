/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var len = Math.max(num1.length, num2.length);
    var s = 0;
    var c = 0;
    var res = '';
    for (var i = 1; i <= len; i++) {
        if (i <= num1.length && i <= num2.length) {
            s = parseInt(num1[num1.length - i]) + parseInt(num2[num2.length - i]) + c;
        } else if (i <= num1.length) {
            s = parseInt(num1[num1.length - i]) + c;
        } else {
            s = parseInt(num2[num2.length - i]) + c;
        }
        c = Math.floor(s / 10);
        res = s % 10 + res;
    }
    if (c) {
        res = c + res;
    }
    return res;
};