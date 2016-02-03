/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    if (n < 10) {
        if (n > 0) {
            return 1;
        } else {
            return 0;
        }
    } else {
        var num = n;
        var c = 0;
        while (num >= 10) {
            num = parseInt(num / 10);
            c++;
        }
        var temp = Math.pow(10, c);
        var count = countDigitOne(n % temp) + num * countDigitOne(temp - 1);
        if (num === 1) {
            return n % temp + 1 + count; 
        } else {
            return temp + count;
        }
    }
};