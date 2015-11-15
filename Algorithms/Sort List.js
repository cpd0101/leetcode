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
var qsort = function (pivot, head, tail) {
    if (head === tail) {
        return head;
    } else {
        var h1, t1, h2, t2;
        var p = head.next;
        while (p) {
            var t = p.next;
            if (p.val < head.val) {
                if (h1) {
                    p.next = h1;
                    h1 = p;
                } else {
                    p.next = head;
                    h1 = p;
                    t1 = p;
                }
                if (t2) {
                    t2.next = t;
                } else {
                    head.next = t;
                }
            } else {
                t2 = p;
                if (!h2) {
                    h2 = p;
                }
            }
            if (p === tail) {
                break;
            } else {
                p = t;
            }
        }
        if (pivot) {
            if (head.val < pivot.val) {
                if (t2) {
                    t2.next = pivot;
                } else {
                    head.next = pivot;
                }
            } else {
                if (h1) {
                    pivot.next = h1;
                }
            }
        }
        if (h2) {
            while (h2 !== t2 && head.val === h2.val) {
                head = h2;
                h2 = h2.next;
            }
            qsort(head, h2, t2);
        }
        if (h1) {
            return qsort(pivot, h1, t1);
        } else {
            return head;
        }
    }
};

var sortList = function (head) {
    return qsort(null, head, null);
};