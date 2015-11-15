/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var p = head;
    var pre;
    while (p && p.val < x) {
        pre = p;
        p = p.next;
    }
    var tail = p;
    var s = p;
    if (p) {
        p = p.next;
    }
    while (p) {
        if (p.val < x) {
            if (pre) {
                pre.next = p;
                pre = p;
                s.next = p.next;
            } else {
                s.next = p.next;
                p.next = head;
                pre = p;
                head = p;
            }
        } else {
            s = p;
        }
        p = p.next;
    }
    if (pre) {
        pre.next = tail;
    }
    return head;
};