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
    if (head) {
        var p = head;
    } else {
        return null;
    }
    while (p.next) {
        if (p.val === p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};