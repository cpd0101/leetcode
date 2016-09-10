/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};