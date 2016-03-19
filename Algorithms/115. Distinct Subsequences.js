/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    var dp = [];
    for (var i = -1; i < s.length; i++) {
        dp[i] = [];
        dp[-1][i] = 0;
        dp[i][-1] = 1;
    }
    for (var i = s.length; i < t.length; i++) {
        dp[-1][i] = 0;
    }
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < t.length; j++) {
            dp[i][j] = dp[i - 1][j];
            if (s[i] === t[j]) {
                dp[i][j] += dp[i - 1][j - 1];
            }
        }
    }
    return dp[s.length - 1][t.length - 1];
};