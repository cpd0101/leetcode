/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sLen = s.length;
    var tLen = t.length;
    if (sLen !== tLen) return false;

    var map = {};
    for (var i = 0; i < sLen; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }

        if (map[t[i]] === undefined) {
            map[t[i]] = -1;
        } else {
            map[t[i]]--;
        }
    }

    for (var key in map) {
        if (map[key] !== 0 ) return false;
    }

    return true;
};