/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
    var dp = [];
    var ans = 0;
    for (var i = 0; i < A.length; i++) {
        var map = new Map();
        for (var j = 0; j < i; j++) {
            var delta = A[i] - A[j];
            if (map.has(delta)) {
                map.set(delta, map.get(delta) + 1);
            } else {
                map.set(delta, 1);
            }
            if (dp[j].has(delta)) {
                ans += dp[j].get(delta);
                map.set(delta, map.get(delta) + dp[j].get(delta));
            }
        }
        dp[i] = map;
    }
    return ans;
};