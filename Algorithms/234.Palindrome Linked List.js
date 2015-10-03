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
var isPalindrome = function(head) {
    var fast, slow;
	if (head && head.next) {
		fast = head.next.next;
		slow = head;
	} else {
		return true;
	}
    while (fast) {
    	fast = fast.next;
    	if (fast) {
    		fast = fast.next;
    		slow = slow.next;
    	}
    }
    var p1, p2, p3;
    p1 = slow.next;
    slow.next = null;
    p2 = p1.next;
    if (p2) {
    	p3 = p2.next;
    	p2.next = p1;
    } else {
    	return p1.val == slow.val;
    }
	while (p3) {
    	p1 = p2;
    	p2 = p3;
    	p3 = p2.next;
    	p2.next = p1;
    }
    p1 = head;
    while (p1) {
    	if (p1.val != p2.val) return false;
    	p1 = p1.next;
    	p2 = p2.next;
    }
    return true;
};