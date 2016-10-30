/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
    var m = matrix.length;
    if (m === 0) {
        return [];
    }
    var n = matrix[0].length;
    if (n === 0) {
        return [];
    }
    var pacific = new Set();
    var atlantic = new Set();
    for (var i = 0; i < m; i++) {
        pacific.add([i, 0].join(','));
        atlantic.add([i, n - 1].join(','));
    }
    for (var i = 0; i < n; i++) {
        pacific.add([0, i].join(','));
        atlantic.add([m - 1, i].join(','));
    }
    var bfs = function (set) {
        var dz = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        var queue = Array.from(set);
        while (queue.length) {
            var item = queue.pop().split(',');
            var x = +item[0];
            var y = +item[1];
            for (var i = 0; i < dz.length; i++) {
                var dx = x + dz[i][0];
                var dy = y + dz[i][1];
                if (dx >= 0 && dx < m && dy >= 0 && dy < n && matrix[dx][dy] >= matrix[x][y]) {
                    if (!set.has([dx, dy].join(','))) {
                        queue.push([dx, dy].join(','));
                        set.add([dx, dy].join(','));
                    }
                }
            }
        }
    }
    bfs(pacific);
    bfs(atlantic);
    var res = [];
    pacific.forEach(function (value) {
        if (atlantic.has(value)) {
            value = value.split(',');
            res.push([+value[0], +value[1]]);
        }
    });
    return res;
};