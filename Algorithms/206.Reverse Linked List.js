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
var reverseList = function(head) {
    var p1, p2, p3;
    p1 = head;
    p3 = null;
    while (p1) {
    	p2 = p1.next;
    	p1.next = p3;
    	p3 = p1;
    	p1 = p2;
    }
    return p3;
};