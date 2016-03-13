/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    var ret = [];
    var visited = new Set();
    var calc = function (s) {
        var a = 0;
        var b = 0;
        for (var i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                a++;
            } else if (s[i] === ')') {
                a--;
            }
            if (a < 0) {
                b -= a;
            }
            a = Math.max(a, 0);
        }
        return a + b;
    };
    var dfs = function (s) {
        var n = calc(s);
        if (n === 0) {
            ret.push(s);
            return;
        }
        for (var i = 0; i < s.length; i++) {
            if (s[i] === '(' || s[i] === ')') {
                var temp = s.slice(0, i) + s.slice(i + 1);
                if (!visited.has(temp) && calc(temp) < n) {
                    visited.add(temp);
                    dfs(temp);
                }
            }
        }
    };
    dfs(s);
    return ret;
};