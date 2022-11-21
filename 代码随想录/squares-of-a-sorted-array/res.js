/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let n = nums.length;
    let i = 0, j = n - 1, k = n - 1;
    let A = new Array(n).fill(0); // 新数组
    while (i <= j)
    {
        if (nums[i] * nums[i] < nums[j] * nums[j])
        {
            A[k -- ] = nums[j] * nums[j];
            j -- ;
        }
        else
        {
            A[k -- ] = nums[i] * nums[i];
            i ++ ;
        }
    }
    return A;
};