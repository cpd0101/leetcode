/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    var temp = '#' + s.split('').join('#') + '#';
    var p = [];
    var id = 0;
    var maxlen = 0;
    for (var i = 0; i < temp.length; i++) {
        if (p[id] + id > i) {
            p[i] = Math.min(p[2 * id - i], p[id] + id - i);
        } else {
            p[i] = 1;
        }
        while (temp[i - p[i]] && temp[i - p[i]] === temp[i + p[i]]) {
            p[i]++;
        }
        if (id + p[id] < i + p[i]) id = i;
        if (maxlen < p[i] && p[i] - i === 1) maxlen = p[i];
    }
    var ret = '';
    for (var i = maxlen - 1; i < s.length; i++) {
        ret = s[i] + ret;
    }
    return ret + s;
};