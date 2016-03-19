/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    var dp = [];
    for (var i = -1; i < word1.length; i++) {
        dp[i] = [];
        dp[i][-1] = i + 1;
        dp[-1][i] = i + 1;
    }
    for (var i = word1.length; i < word2.length; i++) {
        dp[-1][i] = i + 1;
    }
    for (var i = 0; i < word1.length; i++) {
        for (var j = 0; j < word2.length; j++) {
            dp[i][j] = dp[i - 1][j - 1];
            if (word1[i] !== word2[j]) {
                dp[i][j] += 1;
            }
            dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1, dp[i][j - 1] + 1);
        }
    }
    return dp[word1.length - 1][word2.length - 1];
};