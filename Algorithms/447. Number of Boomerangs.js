/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    var ans = 0;
    for (var i = 0; i < points.length; i++) {
        var map = new Map();
        for (var j = 0; j < points.length; j++) {
            var dist = (points[i][0] - points[j][0]) * (points[i][0] - points[j][0])
                + (points[i][1] - points[j][1]) * (points[i][1] - points[j][1]);
            if (map.has(dist)) {
                map.set(dist, map.get(dist) + 1);
            } else {
                map.set(dist, 1);
            }
        }
        map.forEach(function (v, k) {
            ans += v * (v - 1);
        });
    }
    return ans;
};