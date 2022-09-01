/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  
  if (nums.length == 0) return [-1, -1];

  let l = 0, r = nums.length - 1;
  
  while (l < r){
    let mid = l + r >> 1;
    if (nums[mid] >= target) r = mid;
    else l = mid + 1;
  }

  if (nums[l] != target) return [-1, -1];

  else{
    let res = l;
    l = 0, r = nums.length - 1;
    while (l < r){
      let mid = l + r + 1 >> 1;
      if (nums[mid] <= target) l = mid;
      else r = mid - 1;
    }
    return [res, l];
  }
};
