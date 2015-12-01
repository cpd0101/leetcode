/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    var cache = [];

    for (var i = 0; i < 101; i++) {
        cache[i] = [];
    }
    
    var uniquePaths = function (m, n) {
        if (m === 1) {
            for (var i = 0; i < n; i++) {
                if (obstacleGrid[0][i] === 1) {
                    cache[m][n] = 0;
                    return 0;
                }
            }
            cache[m][n] = 1;
            return 1;
        } else if (n === 1) {
            for (var i = 0; i < m; i++) {
                if (obstacleGrid[i][0] === 1) {
                    cache[m][n] = 0;
                    return 0;
                }
            }
            cache[m][n] = 1;
            return 1;
        } else if (obstacleGrid[m - 1][n - 1] === 1) {
            cache[m][n] = 0;
            return 0;
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
    };
    return uniquePaths(obstacleGrid.length, obstacleGrid[0].length);
};