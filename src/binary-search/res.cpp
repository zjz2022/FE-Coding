class Solution
{
public:
  int search(vector<int> &nums, int target)
  {
    int l = 0;
    int r = nums.size() - 1;
    while (l < r)
    {
      int mid = (l + r) / 2;
      if (nums[mid] >= target)
      {
        r = mid;
      }
      else
      {
        l = mid + 1;
      }
    }
    if (nums[l] == target)
    {
      return l;
    }
    return -1;
  }
};