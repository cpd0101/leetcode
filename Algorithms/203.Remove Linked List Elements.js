/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var p1, p2;
    p1 = head;
    while (p1) {
        if (p1.val === val ) {
            if (p2) {
                p2.next = p1.next;
            } else {
                head = p1.next;
            }
        } else {
            p2 = p1;
        }
        p1 = p1.next;
    }
    return head;
};