/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {Point[]}
 */
var outerTrees = function (points) {
  if (points.length <= 3) {
    return points;
  }
  points.sort((a, b) => {
    if (a.x === b.x) {
      return a.y - b.y;
    }
    return a.x - b.x;
  });
  const ccw = (p1, p2, p3) => (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
  const lo = [];
  for (let i = 0; i < points.length; i++) {
    while (lo.length > 1 && ccw(lo[lo.length - 2], lo[lo.length - 1], points[i]) < 0) {
      lo.pop();
    }
    lo.push(points[i]);
  }
  const up = [];
  for (let i = points.length - 1; i > -1; i--) {
    while (up.length > 1 && ccw(up[up.length - 2], up[up.length - 1], points[i]) < 0) {
      up.pop();
    }
    up.push(points[i]);
  }
  return lo.slice(0, lo.length - 1).concat(up.slice(0, up.length - 1));
};