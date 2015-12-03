/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var factorial = function (n) {
    if (n < 2) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
};

var cache = [];

for (var i = 1; i < 10; i++) {
    cache[i] = factorial(i);
}

var getPermutation = function(n, k) {
    var ret = [];
    for (var i = 1; i <= n; i++) {
        ret.push(i);
    }
    var str = '';
    n--;
    while (ret.length) {
        if (k % cache[n]) {
            str += ret.splice(parseInt(k / cache[n]), 1);
        } else {
            str += ret.splice(parseInt(k / cache[n] - 1), 1);
        }
        k = k % cache[n];
        n--;
    }
    return str;
};