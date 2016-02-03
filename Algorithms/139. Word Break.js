/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    var cache = {};
    var canBreak = function (s) {
        if (s) {
            if (cache[s] !== undefined) {
                return cache[s];
            }
            for (var item of wordDict) {
                if (s.length >= item.length && s.slice(0, item.length) === item) {
                    if (canBreak(s.slice(item.length))) {
                        cache[s] = true;
                        return true;
                    }
                }
            }
            cache[s] = false;
            return false;
        } else {
            return true;
        }
    };
    return canBreak(s);
};