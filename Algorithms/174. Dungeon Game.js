/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    var m = dungeon.length;
    if (m === 0) {
        return 0;
    }
    var n = dungeon[0].length;
    if (n === 0) {
        return 0;
    }
    var dp = [];
    for (var i = 0; i < m; i++) {
        dp[i] = [];
    }
    dp[m - 1][n - 1] = Math.max(0 - dungeon[m - 1][n - 1], 0);
    for (var i = m - 2; i > -1; i--) {
        dp[i][n - 1] = Math.max(dp[i + 1][n - 1] - dungeon[i][n - 1], 0);
    }
    for (var i = n - 2; i > -1; i--) {
        dp[m - 1][i] = Math.max(dp[m - 1][i + 1] - dungeon[m - 1][i], 0);
    }
    for (var i = m - 2; i > -1; i--) {
        for (var j = n - 2; j > -1; j--) {
            dp[i][j] = Math.max(Math.min(dp[i][j + 1], dp[i + 1][j]) - dungeon[i][j], 0);
        }
    }
    return dp[0][0] + 1;
};