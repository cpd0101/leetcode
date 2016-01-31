/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
    var map = {};
    var clone = function (graph) {
        if (map[graph.label]) {
            return map[graph.label];
        } else {
            var label = new UndirectedGraphNode(graph.label);
            map[graph.label] = label;
            for (var i = 0; i < graph.neighbors.length; i++) {
                label.neighbors.push(clone(graph.neighbors[i]));
            }
            map[graph.label] = label;
            return label;
        }
    };
    if (graph) {
        return clone(graph);
    } else {
        return graph;
    }
};