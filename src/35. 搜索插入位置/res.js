/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1, max = nums.length;
    while(l < r){
        let mid = l + r >> 1;
        if (nums[mid] >= target) r = mid;
        else l = mid + 1; 
    }
    if (target > nums[r]) return max;
    else return l;
};

