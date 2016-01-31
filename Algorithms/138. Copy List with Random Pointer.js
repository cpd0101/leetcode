/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function (head) {
    var map = {};
    var clone = function (node) {
        if (node) {
            if (map[node.label]) {
                return map[node.label];
            } else {
                var label = new RandomListNode(node.label);
                map[node.label] = label;
                label.next = clone(node.next);
                label.random = clone(node.random);
                map[node.label] = label;
                return label;
            }
        } else {
            return node;
        }
    };
    return clone(head);
};