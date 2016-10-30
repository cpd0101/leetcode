/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
    var ans = 1;
    k -= 1;
    var calcGap = function (n, s, e) {
        var gap = 0;
        while (s <= n) {
            gap += Math.max(0, Math.min(n + 1, e) - s);
            s *= 10;
            e *= 10;
        }
        return gap;
    };
    while (k > 0) {
        var gap = calcGap(n, ans, ans + 1);
        if (gap <= k) {
            ans += 1;
            k -= gap;
        } else {
            ans *= 10;
            k -= 1;
        }
    }
    return ans;
};