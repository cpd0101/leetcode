/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    var lines = [];
    for (var i = 0; i < buildings.length; i++) {
        lines.push([buildings[i][0], -buildings[i][2]]);
        lines.push([buildings[i][1], buildings[i][2]]);
    }
    lines.sort(function (a, b) {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
    var heap = [0];
    var res = [];
    var pre = 0;
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line[1] < 0) {
            heap.push(-line[1]);
        } else {
            heap.splice(heap.indexOf(line[1]), 1);
        }
        var cur = Math.max.apply(null, heap);
        if (cur !== pre) {
            res.push([line[0], cur]);
            pre = cur;
        }
    }
    return res;
};