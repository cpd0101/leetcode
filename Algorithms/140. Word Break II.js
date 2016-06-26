/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    var min = Infinity;
    var max = 0;
    wordDict.forEach(function (value) {
        if (value.length > max) {
            max = value.length;
        }
        if (value.length < min) {
            min = value.length;
        }
    });
    var dp = [1];
    for (var i = 0; i < s.length; i++) {
        if (dp[i]) {
            for (var j = min; j <= max && i + j <= s.length; j++) {
                var word = s.slice(i, i + j);
                if (wordDict.has(word)) {
                    dp[i + j] = 1;
                }
            }
        }
    }
    var dfs = function (fromIndex) {
        var res = [];
        for (var i = min; i <= max && fromIndex + i <= s.length; i++) {
            var word = s.slice(fromIndex, fromIndex + i);
            if (dp[fromIndex + i] && wordDict.has(word)) {
                if (fromIndex + i < s.length) {
                    var tmp = dfs(fromIndex + i);
                    for (var j = 0; j < tmp.length; j++) {
                        res.push(word + ' ' + tmp[j]);
                    }
                } else {
                    res.push(word);
                }
            }
        }
        return res;
    };
    if (dp[s.length]) {
        return dfs(0);
    } else {
        return [];
    }
};