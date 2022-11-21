class Solution {
    public int[] searchRange(int[] nums, int target) {

      if (nums.length == 0) return new int[]{-1, -1};

      int l = 0, r = nums.length - 1;

      while (l < r) {
        int mid = l + r >> 1;
        if (nums[mid] >= target) r = mid;
        else l = mid + 1;
      }

      if (nums[l] != target) return new int[]{-1, -1};

      else {
        int res = l;
        r = nums.length - 1;l = 0;
        while (l < r) {
          int mid = l + r + 1 >> 1;
          if (nums[mid] <= target) l = mid;
          else r = mid - 1; 
        }
        return new int[]{res, l};
      } 
    }
}
