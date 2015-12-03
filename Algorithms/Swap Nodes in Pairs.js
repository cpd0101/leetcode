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
var swapPairs = function(head) {
    var p = head;
    while (p) {
        if (p.next) {
            var val = p.next.val;
            p.next.val = p.val;
            p.val = val;
            p = p.next.next;
        } else {
            break;
        }
    }
    return head;
};