/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
    var set = new Set();
    var left = Infinity;
    var right = -Infinity;
    var bottom = Infinity;
    var top = -Infinity;
    var area = 0;
    for (var i = 0; i < rectangles.length; i++) {
        var rect = rectangles[i];
        if (rect[0] < left) {
            left = rect[0];
        }
        if (rect[2] > right) {
            right = rect[2];
        }
        if (rect[1] < bottom) {
            bottom = rect[1];
        }
        if (rect[3] > top) {
            top = rect[3];
        }
        area += (rect[2] - rect[0]) * (rect[3] - rect[1]);
        var key1 = rect[0] + ',' + rect[1];
        var key2 = rect[2] + ',' + rect[1];
        var key3 = rect[2] + ',' + rect[3];
        var key4 = rect[0] + ',' + rect[3];
        if (set.has(key1)) {
            set.delete(key1);
        } else {
            set.add(key1);
        }
        if (set.has(key2)) {
            set.delete(key2);
        } else {
            set.add(key2);
        }
        if (set.has(key3)) {
            set.delete(key3);
        } else {
            set.add(key3);
        }
        if (set.has(key4)) {
            set.delete(key4);
        } else {
            set.add(key4);
        }
    }
    var key1 = left + ',' + bottom;
    var key2 = right + ',' + bottom;
    var key3 = right + ',' + top;
    var key4 = left + ',' + top;
    if (set.size === 4 && set.has(key1) && set.has(key2) && set.has(key3) && set.has(key4) && area === (right - left) * (top - bottom)) {
        return true;
    } else {
        return false;
    }
};