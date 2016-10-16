/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++; 
        } else {
            map[s[i]] = 1;
        }
    }
    var len = 1;
    for (var key in map) {
        if (map.hasOwnProperty(key)) {
            len += Math.floor(map[key] / 2) * 2;
        }
    }
    return len > s.length ? s.length : len;
};