/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (!p) {
        return !s;
    }
    if (p.length === 1 || p[1] !== '*') {
        if (!s || (s[0] !== p[0] && p[0] !== '.')) {
            return false;
        }
        return isMatch(s.slice(1), p.slice(1));
    } else {
        if (isMatch(s, p.slice(2))) {
            return true;
        }
        for (var i = 0; i < s.length; i++) {
            if (p[0] === '.' || p[0] === s[i]) {
                if (isMatch(s.slice(i + 1), p.slice(2))) {
                    return true;
                }
            } else {
                break;
            }
        }
        return false;
    }
};