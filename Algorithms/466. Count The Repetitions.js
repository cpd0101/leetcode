/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    var l1 = s1.length;
    var l2 = s2.length;
    var x1 = 0;
    var x2 = 0;
    var dp = {};
    while (x1 < l1 * n1) {
        while (s1[x1 % l1] !== s2[x2 % l2] && x1 < l1 * n1) {
            x1++;
        }
        if (x1 >= l1 * n1) {
            break;
        }
        var y1 = x1 % l1;
        var y2 = x2 % l2;
        if (dp[y1] === undefined) {
            dp[y1] = {};
        }
        if (dp[y1][y2] === undefined) {
            dp[y1][y2] = [x1, x2];
        } else {
            var dx1 = dp[y1][y2][0];
            var dx2 = dp[y1][y2][1];
            var round = parseInt((l1 * n1 - dx1) / (x1 - dx1));
            x1 = dx1 + round * (x1 - dx1);
            x2 = dx2 + round * (x2 - dx2);
        }
        if (x1 < l1 * n1) {
            x1++;
            x2++;
        }
    }
    return parseInt(x2 / (l2 * n2));
};