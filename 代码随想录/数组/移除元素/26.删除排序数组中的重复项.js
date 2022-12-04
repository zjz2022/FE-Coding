/**
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.length == 0 || nums == null  ) return 0;
    let p = 0;
    let q = 1;
    while (q < nums.length)
    {
        if (nums[p] != nums[q])
        {
            if (q - p > 1)
            {
                nums[p + 1] = nums[q]; // 相隔2位及以上才赋值
            }
            p ++ ; // 不相等就要p指针前进
        }
        q ++;
    }
    return p + 1;
};
