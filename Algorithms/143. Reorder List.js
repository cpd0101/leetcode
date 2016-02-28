/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) {
        return;
    }
    var slow = head;
    var fast = head.next;
    while (fast) {
        if (!fast.next) break;
        slow = slow.next;
        fast = fast.next.next;
    }
    var p = slow.next;
    slow.next = null;
    slow = p;
    var temp = null;
    while (slow) {
        var p = slow.next;
        slow.next = temp;
        temp = slow;
        slow = p;
    }
    var p = head;
    while (temp) {
        var q = p.next;
        p.next = temp;
        temp = temp.next;
        p.next.next = q;
        p = q;
    }
};