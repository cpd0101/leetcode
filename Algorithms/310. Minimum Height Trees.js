/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    var v = [];
    var vertices = [];
    for (var i = 0; i < n; i++) {
        v[i] = [];
        vertices[i] = i;
    }
    for (var i = 0; i < edges.length; i++) {
        v[edges[i][0]].push(edges[i][1]);
        v[edges[i][1]].push(edges[i][0]);
    }
    if (vertices.length <= 2) {
        return vertices;
    }
    while (true) {
        var leaves = [];
        var nodes = [];
        for (var i = 0; i < vertices.length; i++) {
            if (v[vertices[i]].length === 1) {
                leaves.push(vertices[i]);
            } else {
                nodes.push(vertices[i]);
            }
        }
        vertices = nodes;
        if (vertices.length <= 2) {
            break;
        }
        for (var i = 0; i < leaves.length; i++) {
            for (var j = 0; j < nodes.length; j++) {
                var pos = v[nodes[j]].indexOf(leaves[i]);
                if (pos > -1) {
                    v[nodes[j]].splice(pos, 1);
                    break;
                }
            }
        }
    }
    return vertices;
};