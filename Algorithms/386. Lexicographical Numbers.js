/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    var dfs = function (start, max, arr) {
        for (var i = 0; i < 10; i++) {
            var num = start + i;
            if (!num) continue;
            if (num > max) return;
            arr.push(num);
            if (num * 10 <= max) {
                dfs(num * 10, max, arr);
            }
        }
    };
    var arr = [];
    dfs(0, n, arr);
    return arr;
};