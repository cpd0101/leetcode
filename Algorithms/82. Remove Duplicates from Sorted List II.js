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
var deleteDuplicates = function(head) {
    while (head) {
        if (head.next && head.val === head.next.val) {
            var p = head.next;
            while (p && p.val === head.val) {
                p = p.next;
            }
            head = p;
        } else {
            break;
        }
    }
    var p = head;
    while (p) {
        if (p.next && p.next.next && p.next.val === p.next.next.val) {
            var q = p.next.next;
            while (q && q.val === p.next.val) {
                q = q.next;
            }
            p.next = q;
        } else {
            p = p.next;
        }
    }
    return head;
};