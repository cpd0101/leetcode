/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var p1 = headA;
    var p2 = headB;
    var len1 = 0;
    var len2 = 0;
    while (p1) {
    	len1++;
    	p1 = p1.next;
    }
    while (p2) {
    	len2++;
    	p2 = p2.next;
    }
    p1 = headA;
    p2 = headB;
    if (len1 < len2) {
    	for(var i = len1; i < len2; i++) {
    		p2 = p2.next;
    	}
    	while (p1) {
    		if (p1 == p2) return p1;
    		p1 = p1.next;
    		p2 = p2.next;
    	}
    	return null;
    } else {
    	for(i = len2; i < len1; i++) {
    		p1 = p1.next;
    	}
    	while (p2) {
    		if (p1 == p2) return p2;
    		p1 = p1.next;
    		p2 = p2.next;
    	}
    	return null;
    }
};