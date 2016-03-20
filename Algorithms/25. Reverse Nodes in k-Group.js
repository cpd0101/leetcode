/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    var p = head;
    var ahead = head;
    var tail = null;
    if (k <= 1) {
        return ahead; 
    }
    while (p) {
        var h = p;
        var r = p;
        p = p.next;
        r.next = null;
        for (var i = 1; i < k; i++) {
            if (p) {
                var next = p.next;
                p.next = h;
                h = p;
                p = next;
            } else {
                break;
            }
        }
        if (i !== k) {
            var temp = h;
            h = r;
            while (temp !== h) {
                var next = temp.next;
                r = h.next;
                h.next = temp;
                temp.next = r;
                temp = next;
            }
        }
        if (tail) {
            tail.next = h;
        } else {
            ahead = h;
        }
        tail = r;
    }
    return ahead;
};