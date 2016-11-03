/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    var k = 1;
    var sum = 0;
    while (sum + k <= n) {
        sum += k;
        k++;
    }
    return --k;
};