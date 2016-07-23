/**
 * @param {number} n
 * @return {number}
 */
var cache = {};
var getMoneyAmount = function (n) {
    var dp = function (start, end) {
        var res = 0;
        if (end - start === 1) {
            return start;
        }
        var low = start;
        var high = end;
        for (var i = start + 1; i < end; i++) {
            if (typeof cache[start + ',' + (i - 1)] === 'number') {
                low = cache[start + ',' + (i - 1)];
            } else {
                low = dp(start, i - 1);
                cache[start + ',' + (i - 1)] = low;
            }
            if (typeof cache[(i + 1) + ',' + end] === 'number') {
                high = cache[(i + 1) + ',' + end];
            } else {
                high = dp(i + 1, end);
                cache[(i + 1) + ',' + end] = high;
            }
            if (res === 0 || (Math.max(low, high) + i) < res) {
                res = Math.max(low, high) + i;
            }
        }
        return res;
    };
    return dp(1, n);
};