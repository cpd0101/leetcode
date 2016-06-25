/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    var data = {};
    for (var i = 0; i < t.length; i++) {
        if (data[t[i]]) {
            data[t[i]]++;
        } else {
            data[t[i]] = 1;
        }
    }
    var now = {};
    var num = 0;
    var min = s.length + 1;
    var left = 0;
    var right = -1;
    for (var i = 0, j = 0; i < s.length; i++) {
        if (now[s[i]] === undefined) {
            now[s[i]] = 0;
        }
        if (data[s[i]] === undefined) {
            data[s[i]] = 0;
        }
        if (num < t.length) {
            if (now[s[i]] < data[s[i]]) {
                num++;
            }
            now[s[i]]++;
        }
        if (num === t.length) {
            while (j <= i && now[s[j]] > data[s[j]]) {
                now[s[j]]--;
                j++;
            }
            if (min > i - j + 1) {
                left = j;
                right = i;
                min = i - j + 1;
            }
            while (j <= i && num === t.length) {
                now[s[j]]--;
                if (now[s[j]] < data[s[j]]) {
                    num--;
                }
                j++;
            }
        }
    }
    return s.slice(left, right + 1);
};