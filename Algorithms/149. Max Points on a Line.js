/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
    var map = new Map();
    var max = 0;
    for (var i = 0; i < points.length; i++) {
        map.clear();
        var duplicate = 1;
        for (var j = 0; j < points.length; j++) {
            if (i === j) {
                continue;
            }
            var slope = 0;
            if (points[i].x === points[j].x && points[i].y === points[j].y) {
                duplicate++;
                continue;
            } else if (points[i].x === points[j].x) {
                slope = Infinity;
            } else {
                slope = (points[i].y - points[j].y) / (points[i].x - points[j].x);
            }
            map.set(slope, map.has(slope) ? map.get(slope) + 1 : 1);
        }
        max = Math.max(duplicate, max);
        map.forEach(function (value) {
            max = Math.max(duplicate + value, max);
        });
    }
    return max;
};