/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    var h = [];
    var sum = 0;
    for (var i = 0; i < grid[0].length; i++) {
        sum += grid[0][i]; 
        h.push(sum);
    }
    var v = [];
    sum = 0;
    var cache = [];
    for (var i = 0; i < grid.length; i++) {
        sum += grid[i][0];
        v.push(sum);
        cache[i] = [];
    }
    var minSum = function (m, n) {
        if (m === 0) {
            return h[n];
        } else if (n === 0) {
            return v[m];
        } else {

            if (cache[m - 1][n] === undefined) {
                cache[m - 1][n] = minSum(m - 1, n);
            }

            if (cache[m][n - 1] === undefined) {
                cache[m][n - 1] = minSum(m, n - 1);
            }

            return Math.min((grid[m][n] + cache[m - 1][n]), (grid[m][n] + cache[m][n - 1]));
        }
    };
    return minSum(grid.length - 1, grid[0].length - 1);
};