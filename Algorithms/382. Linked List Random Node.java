/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {

    private ListNode pos = null;
    private Random random = new Random();
    private int len = 1;

    /** @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node. */
    public Solution(ListNode head) {
        pos = head;
        while (pos.next != null) {
            len++;
            pos = pos.next;
        }
        pos.next = head;
    }
    
    /** Returns a random node's value. */
    public int getRandom() {
        int step = random.nextInt(len);
        while (step > 0) {
            step--;
            pos = pos.next;
        }
        return pos.val;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(head);
 * int param_1 = obj.getRandom();
 */