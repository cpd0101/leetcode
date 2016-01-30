/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    var v = [];
    for (var i = 0; i < n; i++) {
        v[i] = [];
    }
    for (var i = 0; i < edges.length; i++) {
        v[edges[i][0]].push(edges[i][1]);
        v[edges[i][1]].push(edges[i][0]);
    }
    var max = n;
    var ret = [];
    var treeHeight = function (n) {
        var level = 1;
        var queue = [{
            node: n,
            level: level
        }];
        var visit = [];
        while (queue.length) {
            var p = queue.shift();
            visit[p.node] = 1;
            level = p.level;
            var nodes = v[p.node];
            for (var i = 0; i < nodes.length; i++) {
                if (!visit[nodes[i]]) {
                    queue.push({
                        node: nodes[i],
                        level: level + 1
                    });
                }
            }
        }
        return level;
    };
    for (var i = 0; i < n; i++) {
        var h = treeHeight(i);
        if (h < max) {
            max = h;
            ret = [i];
        } else if (h === max) {
            ret.push(i);
        }
    }
    return ret;
};