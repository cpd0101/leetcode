public class Solution {

    private int [] origin = null;
    private int [] current = null;
    private Random random = new Random();

    public Solution(int[] nums) {
        this.origin = nums;
        this.current = nums.clone();
    }
    
    /** Resets the array to its original configuration and return it. */
    public int[] reset() {
        return origin;
    }
    
    /** Returns a random shuffling of the array. */
    public int[] shuffle() {
        for (int i = 0; i < current.length; i++) {
            int pick = random.nextInt(current.length);
            int swap = current.length - 1 - i;
            int temp = current[swap];
            current[swap] = current[pick];
            current[pick] = temp;
        }
        return current;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */