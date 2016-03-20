/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    if (s1 === s2) {
        return true;
    }
    var map = {};
    for (var i = 0; i < s1.length; i++) {
        if (map[s1[i]]) {
            map[s1[i]] += 1;
        } else {
            map[s1[i]] = 1;
        }
        if (map[s2[i]]) {
            map[s2[i]] -= 1;
        } else {
            map[s2[i]] = -1;
        }
    }
    for (var key in map) {
        if (map[key] !== 0) {
            return false;
        }
    }
    for (var i = 1; i < s1.length; i++) {
        if (isScramble(s1.slice(0, i), s2.slice(0, i))
            && isScramble(s1.slice(i), s2.slice(i))) {
            return true;
        }
        if (isScramble(s1.slice(0, i), s2.slice(s2.length - i))
            && isScramble(s1.slice(i), s2.slice(0, s2.length - i))) {
            return true;
        }
    }
    return false;
};