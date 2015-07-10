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
    var fast = head;
    var slow = head;
    var preSlow = head;
    while (fast) {
    	fast = fast.next;
    	if (fast) {
    		fast = fast.next;
    		preSlow = slow;
    		slow = slow.next;
    	}
    }
    if (preSlow) {
    	var p1 = preSlow.next;
    } else {
    	return true;
    }
    preSlow.next = null;
    if (p1) {
    	var p2 = p1.next;
    } else {
    	return true;
    }
    if (p2) {
    	var p3 = p2.next;
    	p2.next = p1;
    } else {
    	return p1.val == preSlow.val;
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