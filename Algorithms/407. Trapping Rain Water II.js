/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
    var m = heightMap.length;
    if (m === 0) {
        return 0;
    }
    var n = heightMap[0].length;
    if (n === 0) {
        return 0;
    }
    var peakMap = [];
    var q = [];
    for (var i = 0; i < m; i++) {
        peakMap[i] = [];
        peakMap[i][0] = heightMap[i][0];
        peakMap[i][n - 1] = heightMap[i][n - 1];
        q.push([i, 0]);
        q.push([i, n - 1]);
    }
    for (var i = 0; i < n; i++) {
        peakMap[0][i] = heightMap[0][i];
        peakMap[m - 1][i] = heightMap[m - 1][i];
        q.push([0, i]);
        q.push([m - 1, i]);
    }
    var dz = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (q.length) {
        var item = q.shift();
        var x = item[0];
        var y = item[1];
        for (var i = 0; i < dz.length; i++) {
            var dx = x + dz[i][0];
            var dy = y + dz[i][1];
            if (dx > 0 && dx < m - 1 && dy > 0 && dy < n - 1) {
                peakMap[x][y] = peakMap[x][y] === undefined ? 20000 : peakMap[x][y];
                peakMap[dx][dy] = peakMap[dx][dy] === undefined ? 20000 : peakMap[dx][dy];
                var limit = Math.max(peakMap[x][y], heightMap[dx][dy]);
                if (peakMap[dx][dy] > limit) {
                    peakMap[dx][dy] = limit;
                    q.push([dx, dy]);
                }
            }
        }
    }
    var res = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            res += peakMap[i][j] - heightMap[i][j];
        }
    }
    return res;
};