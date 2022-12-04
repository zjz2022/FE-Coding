/**
 * @param {number[]} tree
 * @return {number}
 */
 var totalFruit = function (fruits) {
    // 初始化所有数据
    // l 是左指针
    // n 是上个篮子的终点，标志着这个篮子要舍弃原来的水果
    // maxLen 记录符合条件的两个篮子的最大数
    // arr[] 用于储存水果的种类，用以分情况讨论
    let l = maxLen = n = 0;
    let arr = [fruits[l]];

    // 快指针遍历数组
    for (let r = 0; r < fruits.length; r++)
    {
        // 第一次判断：如果新元素出现了，就看篮子要不要换水果
        if (!arr.includes(fruits[r]))
        {
            // 有空篮子时，把新水果存进去
            if (arr.length == 0) {arr[0] = fruits[r]}
            else if (arr.length == 1) {arr[1] = fruits[r]}
            // 如果两个篮子都已经装上水果了，那就顺次退位
            else
            {
                l = n // 换水果
                arr[0] = fruits[r - 1] // 取代 跟不上队伍的人
                arr[1] = fruits[r] // 取代 即将跟不上丢无人
            }
        }

        // 无论包不包括新元素，都会执行这一步判断：如果水果不是相邻相同的话，让记录上个篮子最后一个水果的下标
        if (fruits[r] !== fruits[n]) {n = r}

        // 更新最大值
        maxLen = Math.max(maxLen, r - l + 1)
    }
    return maxLen
};