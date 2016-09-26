/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    var len = 1;
    var cnt = 9;
    var start = 1;
    while (n > len * cnt) {
        n -= len * cnt;
        len++;
        start *= 10;
        cnt *= 10;
    }
    start += parseInt((n - 1) / len);
    return (start + '')[(n - 1) % len] - 0;
};