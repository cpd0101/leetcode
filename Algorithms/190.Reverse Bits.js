/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var bits = [];
    while (n) {
        bits.push(n % 2);
        n = Math.floor(n / 2);
    }
    var len = bits.length;
    var sum = 0;
    for (var i = 0; i < len; i++) {
        if (bits[i]) {
            sum += Math.pow(2, 31 - i);
        }
    }
    return sum;
};