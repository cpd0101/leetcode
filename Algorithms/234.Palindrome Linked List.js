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
	if (head && head.next) {
		var fast = head.next.next;
		var slow = head;
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
    p1 = slow.next;
    slow.next = null;
    var p2 = p1.next;
    if (p2) {
    	var p3 = p2.next;
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