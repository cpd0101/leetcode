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
var insertionSortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    var fast = head.next;
    var slow = head;
    while (fast.next) {
        fast = fast.next;
        if (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }
    }
    var r = slow.next;
    slow.next = null;
    var ahead = insertionSortList(head);
    var tail = insertionSortList(r);
    var ret;
    if (ahead && tail) {
        if (ahead.val < tail.val) {
            ret = ahead;
            ahead = ahead.next;
        } else {
            ret = tail;
            tail = tail.next;
        }
    } else {
        if (ahead) {
            return ahead;
        } else {
            return tail;
        }
    }
    head = ret;
    while (ahead || tail) {
        if (ahead && tail) {
            if (ahead.val < tail.val) {
                ret.next = ahead;
                ret = ret.next;
                ahead = ahead.next;
            } else {
                ret.next = tail;
                ret = ret.next;
                tail = tail.next;
            }
        } else if (ahead) {
            ret.next = ahead;
            return head;
        } else {
            ret.next = tail;
            return head;
        }
    }
};