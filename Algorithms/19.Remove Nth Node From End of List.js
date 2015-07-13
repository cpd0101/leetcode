/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var p1 = head;
    var p2 = head;
    while (n--) {
    	p1 = p1.next;
    }
    if (p1) {
    	while (p1.next) {
	    	p1 = p1.next;
	    	p2 = p2.next;
	    }
	    p2.next = p2.next.next;
    	return head;
    } else {
    	return head.next;
    }
};