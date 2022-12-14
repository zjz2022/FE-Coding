/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = parseInt((r + l) / 2);
        if (nums[mid] >= target) r = mid;
        else l = mid + 1;
    }
    if (nums[l] == target) {
        return l;
    }
    return -1;
};
