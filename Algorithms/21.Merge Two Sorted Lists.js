/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head, p1, p2;
    if (l1 && l2) {
    	if (l1.val < l2.val) {
    		head = l1;
    		p1 = l1.next;
    		p2 = l2;
    	} else {
    		head = l2;
    		p1 = l1;
    		p2 = l2.next;
    	}
    } else {
    	if (l1) {
    		return l1;
    	} else {
    		return l2;
    	}
    }
    var p = head;
    p.next = null;
    while (p1 && p2) {
    	if (p1.val < p2.val) {
    		p.next = p1;
    		p1 = p1.next;
    	} else {
    		p.next = p2;
    		p2 = p2.next;
    	}
    	p = p.next;
    	p.next = null;
    }
    if (p1) {
    	p.next = p1;
    } else {
    	p.next = p2;
    }
    return head;
};