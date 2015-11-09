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
var detectCycle = function(head) {
    while (head) {
        if (head.visit) {
            delete head.visit;
            return head;
        } else {
            head.visit = true;
        }
        head = head.next;
    }
    return null;
};