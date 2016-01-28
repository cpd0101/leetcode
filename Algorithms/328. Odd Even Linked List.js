/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head) {
        return head;
    }
    var p, q, even, evenHead;
    p = head;
    q = p.next;
    even = q;
    evenHead = even;
    if (q && q.next) {
        p.next = q.next;
        p = p.next;
    } else {
        p.next = evenHead;
        p = null;
    }
    while (p && p.next) {
        q = p.next;
        even.next = q;
        even = even.next;
        if (q && q.next) {
            p.next = q.next;
            p = p.next;
        } else {
            p.next = evenHead;
            p = null;
        }
    }
    if (p) {
        even.next = null;
        p.next = evenHead;
    }
    return head;
};