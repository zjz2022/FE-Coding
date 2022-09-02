class Solution {
    public boolean isPerfectSquare(int num) {
        int l = 0, r = num;
        while (l < r) 
        {
            int mid = (l + r + 1) / 2;
            if (mid <= num / mid) l = mid;
            else r = mid - 1; 
        }
        if (l * l == num) return true;
        else return false;
    }
}