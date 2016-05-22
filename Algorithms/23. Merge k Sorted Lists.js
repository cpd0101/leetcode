/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    var p = [];
    for (var i = 0; i < lists.length; i++) {
        if (lists[i]) {
            p.push(lists[i]);
        }
    }
    var head = null;
    var curP = null;
    while (p.length) {
        var minValue = p[0].val;
        var minIndex = 0;
        for (var i = 1; i < p.length; i++) {
            if (p[i].val < minValue) {
                minValue = p[i].val;
                minIndex = i;
            }
        }

        if (head === null) {
            head = p[minIndex];
            curP = head;
        } else {
            curP.next = p[minIndex];
            curP = curP.next;
        }

        if (p.length === 1) {
            return head;
        }

        p[minIndex] = p[minIndex].next;
        if (p[minIndex] === null) {
            p.splice(minIndex, 1);
        }
    }

    return head;
};