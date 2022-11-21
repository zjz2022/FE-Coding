/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    // 长度计算一次
    const len = nums.length;
    let l = r = sum = 0,
        res = len + 1; // 为了 return res > len ? 0 : res; 能符合条件，这里 res = len + 1
    while (r < len)
    {
        // 子数组的和还不够大，继续加右边的项目
        sum += nums[r ++ ];
        //窗口滑动
        while (sum >= target) // 所有符合条件的子数组
        {
            // r始终为开区间 [l, r)
            res = res < r - l ? res : r - l; // 比较子数组的长度，取最小值
            sum -= nums[l ++ ];
        }
    }
    return res > len ? 0 : res; // 当没有符合条件的子数组时，输出 0 ，故 res 初始化为 Len + 1
};