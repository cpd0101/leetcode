public class Solution {

    int[] nums;

    public Solution(int[] nums) {
        this.nums = nums;
    }
    
    public int pick(int target) {
        int i = 0;
        while (i < nums.length && nums[i] != target) {
            i++;
        }
        int start = i;
        while (i < nums.length && nums[i] == target) {
            i++;
        }
        Random r = new Random();
        return start + r.nextInt(i - start);
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int param_1 = obj.pick(target);
 */