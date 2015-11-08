/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var p = head;
    while (p) {
        if (p.visit) {
            return true;
        } else {
            p.visit = true; 
        }
        p = p.next;
    }
    return false;
};