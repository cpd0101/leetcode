/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort(function (a, b) {
        return a - b;
    });
    s.sort(function (a, b) {
        return a - b;
    });
    var res = 0;
    var i = 0;
    var j = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            res++;
            i++;
            j++;
        } else {
            j++;
        }
    }
    return res;
};