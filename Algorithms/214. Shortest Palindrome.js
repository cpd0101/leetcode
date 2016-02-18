/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    var isPalindrome = function (s) {
        for (var i = parseInt(s.length / 2); i >= 0; i--) {
            if (s[i] !== s[s.length - 1 - i]) return false;
        }
        return true;
    };
    for (var j = s.length - 1; j >= 0; j--) {
        if (isPalindrome(s.slice(0, j + 1))) break;
    }
    var ret = '';
    for (var i = j + 1; i < s.length; i++) {
        ret = s[i] + ret;
    }
    return ret + s;
};