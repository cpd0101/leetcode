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
var addTwoNumbers = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    var head = new ListNode((l1.val + l2.val) % 10);
    var c = parseInt((l1.val + l2.val) / 10);
    var p = head;
    while (l1.next && l2.next) {
        l1 = l1.next;
        l2 = l2.next;
        p.next = new ListNode((l1.val + l2.val + c) % 10);
        c = parseInt((l1.val + l2.val + c) / 10);
        p = p.next;
    }
    while (l1.next) {
        l1 = l1.next;
        p.next = new ListNode((l1.val + c) % 10);
        c = parseInt((l1.val + c) / 10);
        p = p.next;
        if (c === 0) {
            p.next = l1.next;
            break;
        }
    }
    while (l2.next) {
        l2 = l2.next;
        p.next = new ListNode((l2.val + c) % 10);
        c = parseInt((l2.val + c) / 10);
        p = p.next;
        if (c === 0) {
            p.next = l2.next;
            break;
        }
    }
    if (c) {
        p.next = new ListNode(c);
    }
    return head;
};