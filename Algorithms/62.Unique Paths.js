/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var cache = [];

for (var i = 0; i < 101; i++) {
    cache[i] = [];
}

var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) {
        return 1;
    } else {
        if (m - 1 === 1) {
            return n;
        } else if (n - 1 === 1) {
            return m;
        } else {
            var a, b;
            if (cache[m - 1][n] !== undefined) {
                a = cache[m - 1][n];
            } else {
                a = uniquePaths(m - 1, n);
                cache[m - 1][n] = a;
            }

            if (cache[m][n - 1] !== undefined) {
                b = cache[m][n - 1];
            } else {
                b = uniquePaths(m, n - 1);
                cache[m][n - 1] = b;
            }
            return a + b;
        }
    }
};