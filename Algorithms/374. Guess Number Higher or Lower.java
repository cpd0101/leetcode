/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        return guessNumber(1, n);
    }

    private int guessNumber(int start, int end) {
        int mid = start + (end - start) / 2;
        int re = guess(mid);
        if (re > 0) {
            if (mid == start) {
                return end;
            }
            return guessNumber(mid, end);
        } else if (re < 0) {
            return guessNumber(start, mid);
        }
        return mid;
    }
}