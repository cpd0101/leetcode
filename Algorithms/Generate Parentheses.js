/**
 * @param {number} n
 * @return {string[]}
 */

var cache = [];

var generateParenthesis = function(n) {
    if (n === 1) {
        return ['()'];
    } else {
        var ret, arr = [];
        if (cache[n - 1] !== undefined) {
            ret = cache[n - 1];
        } else {
            ret = generateParenthesis(n - 1);
            cache[n - 1] = ret;
        }

        for (var i = 0; i < ret.length; i++) {
            arr.push('()' + ret[i]);
            var item = ret[i];
            var c = [];
            for (var j = 0; j < item.length; j++) {
                if (item[j] === '(') {
                    c.push('(');
                } else {
                    c.pop();
                }
                if (c.length === 0) {
                    arr.push('(' + item.slice(0, j + 1) + ')' + item.slice(j + 1));
                }
            }
        }

        for (var i = 0; i < ret.length; i++) {
            var temp = ret[i] + '()';
            if (arr.indexOf(temp) === -1) {
                arr.push(temp);
            }

            var item = ret[i];
            var c = [];
            for (var j = item.length - 1; j > 0; j--) {
                if (item[j] === ')') {
                    c.push(')');
                } else {
                    c.pop();
                }
                if (c.length === 0) {
                    var temp = item.slice(0, j) + '(' + item.slice(j) + ')';
                    if (arr.indexOf(temp) === -1) {
                        arr.push(temp);
                    }
                }
            }
        }

        return arr;
    }
};
