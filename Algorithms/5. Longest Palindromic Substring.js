/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    s = '#' + s.split('').join('#') + '#';
    var max = 0;
    var str = '';
    for (var i = 0; i < s.length; i++) {
        for (var j = 1; j <= i && j <= s.length - i; j++) {
            if (s[i - j] !== s[i + j]) {
                break;
            }
        }
        if (2 * j + 1 > max) {
            max = 2 * j + 1;
            str = s.slice(i - j + 1, i + j);
        }
    }
    return str.split('#').join('');
};