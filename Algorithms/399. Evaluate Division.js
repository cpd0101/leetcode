/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    var map = {};
    for (var i = 0; i < equations.length; i++) {
        if (!map[equations[i][0]]) {
            map[equations[i][0]] = {};
        }
        var m = map[equations[i][0]];
        m[equations[i][1]] = values[i];
        if (!map[equations[i][1]]) {
            map[equations[i][1]] = {};
        }
        var m = map[equations[i][1]];
        m[equations[i][0]] = 1 / values[i];
    }
    var result = [];
    var dfs = function (start, end, res, visited) {
        if (map.hasOwnProperty(start) && !visited[start]) {
            visited[start] = 1;
            var m = map[start];
            if (m.hasOwnProperty(end)) {
                return res * m[end];
            } else {
                for (var key in m) {
                    if (m.hasOwnProperty(key)) {
                        var state = dfs(key, end, res * m[key], visited);
                        if (state !== -1) {
                            return state;
                        }
                    }
                }
            }
        } else {
            return -1;
        }
        return -1;
    }
    for (var i = 0; i < queries.length; i++) {
        if (queries[i][0] === queries[i][1] && map.hasOwnProperty(queries[i][0])) {
            result[i] = 1;
            continue; 
        }
        var visited = [];
        var res = dfs(queries[i][0], queries[i][1], 1, visited);
        result[i] = res;
    }
    return result;
};