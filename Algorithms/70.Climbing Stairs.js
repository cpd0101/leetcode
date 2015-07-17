/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 2) return 1;
    var arr = [1, 1];
    for (var i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[arr.length - 1];
};