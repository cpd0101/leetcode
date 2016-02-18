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
var rotateRight = function(head, k) {
    if (!head) return head;
    var len = 0;
    var p = head;
    while (p) {
        p = p.next;
        len++;
    }
    k = k % len;
    if (k === 0) return head;
    var i = len - k;
    var p = head;
    while (--i) {
        p = p.next;
    }
    var ret = p.next;
    var q = p.next;
    while (q.next) {
        q = q.next;
    }
    p.next = null;
    q.next = head;
    return ret;
};