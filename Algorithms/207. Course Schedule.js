/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var v = [];
    var vertices = [];
    for (var i = 0; i < numCourses; i++) {
        v[i] = [];
        vertices[i] = i;
    }
    for (var i = 0; i < prerequisites.length; i++) {
        if (v[prerequisites[i][0]].indexOf(prerequisites[i][1]) === -1) {
            v[prerequisites[i][0]].push(prerequisites[i][1]);
        }
    }
    while (true) {
        var leaves = [];
        var nodes = [];
        for (var i = 0; i < vertices.length; i++) {
            if (v[vertices[i]].length) {
                nodes.push(vertices[i]);
            } else {
                leaves.push(vertices[i]);
            }
        }
        vertices = nodes;
        if (leaves.length === 0 || vertices.length === 0) {
            break;
        }
        for (var i = 0; i < leaves.length; i++) {
            for (var j = 0; j < nodes.length; j++) {
                var pos = v[nodes[j]].indexOf(leaves[i]);
                if (pos > -1) {
                    v[nodes[j]].splice(pos, 1);
                }
            }
        }
    }
    if (vertices.length) {
        return false;
    } else {
        return true;
    }
};