/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort(function (a, b) {
        return a[0] - b[0];
    });
    var min = Infinity;
    var ans = points.length ? 1 : 0;
    for (var i = 0; i < points.length; i++) {
        if (min < points[i][0]) {
            ans += 1;
            min = Infinity;
        }
        min = Math.min(min, points[i][1]);
    }
    return ans;
};