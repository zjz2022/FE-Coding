class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {

      if (nums.empty()) return {-1, -1};

      int l = 0, r = nums.size() - 1;

      while (l < r){
        int mid = (l + r) / 2;
        if (nums[mid] >= target) r = mid;
        else l = mid + 1;
      }  

      if (nums[l] != target) return {-1, -1};

      else{
        int res = l;
        l = 0, r = nums.size() - 1;
        while (l < r){
          int mid = (l + r + 1) / 2;
          if (nums[mid] <= target) l = mid;
          else r = mid - 1;
        }
        return {res, l}; 
      }
    }
};

