/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var pre;
    var p = head;
    var i = m;
    while (--i) {
        pre = p;
        p = p.next;
    }
    var j = n - m;
    var tail = p;
    p = p.next;
    var s = tail;
    var t;
    while (j) {
        t = p.next;
        p.next = s;
        s = p;
        p = t;
        j--;
    }
    if (pre) {
        pre.next = s;
        tail.next = p;
        return head;
    } else {
        tail.next = p;
        return s;
    }
};