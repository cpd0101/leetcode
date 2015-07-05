/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    while (n) {
        var a = n % 2;
        if (a) count++;
        n = Math.floor(n / 2);
    }
    return count;
};