/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head === null) {
        return null;
    } else if (head.next === null) {
        return new TreeNode(head.val);
    } else {
        var fast = head;
        var slow = head;
        var pre = null;
        while (fast) {
            fast = fast.next;
            if (fast) {
                fast = fast.next;
                pre = slow;
                slow = slow.next;
            }
        }
        var node = new TreeNode(slow.val);
        if (pre) {
            pre.next = null;
            node.left = sortedListToBST(head);
        }
        node.right = sortedListToBST(slow.next);
        return node;
    }
};