/**
 * @param {number} n
 * @return {number}
 */
var cache = {};
var numSquares = function(n) {
    if (n < 4) {
        return n;
    }
    if (n < 8) {
        return n - 3;
    }
    if (cache[n]) {
        return cache[n];
    }
    var num = parseInt(Math.sqrt(n));
    var min = n;
    for (var i = num; i > 1; i--) {
        var temp = numSquares(n - i * i);
        if (temp < 2) {
            cache[n] = temp + 1;
            return temp + 1;
        } else {
            if (temp < min) {
                min = temp;
            }
        }
    }
    cache[n] = min + 1;
    return min + 1;
};