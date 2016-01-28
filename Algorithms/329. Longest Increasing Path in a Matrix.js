/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    var dp = [];
    var h = matrix.length;
    if (!h) {
        return h;
    }
    var w = matrix[0].length;
    for (var i = 0; i < h; i++) {
        dp[i] = [];
    }
    var bidi = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    var dfs = function (x, y) {
        if (dp[x][y] === undefined) {
            dp[x][y] = 1;
        }
        for (var i = 0; i < 4; i++) {
            var dx = x + bidi[i][0];
            var dy = y + bidi[i][1];
            if (-1 < dx && dx < h && -1 < dy && dy < w && matrix[dx][dy] > matrix[x][y]) {
                if (dp[dx][dy] === undefined) {
                    dp[dx][dy] = dfs(dx, dy);
                }
                if (dp[x][y] <= dp[dx][dy]) {
                    dp[x][y] = dp[dx][dy] + 1;
                }
            }
        }
        return dp[x][y];
    };
    var max = 1;
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            if (dp[i][j] === undefined) {
                dp[i][j] = dfs(i, j);
            }
            if (dp[i][j] > max) {
                max = dp[i][j];
            }
        }
    }
    return max;
};