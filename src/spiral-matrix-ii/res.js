/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function (n) {
    // 初始化变量
    let up = left = 0, down = right = n - 1; 
    let num = 1;
    // 定义二维数组
    let ans = new Array(n).fill().map(() => new Array(n));
    // 顺时针给二维数组赋值
    while (true)
    {
        // 左上角开始，从左到右
        for (let i = left; i <= right; i ++ ) ans[up][i] = num ++ ;
        if (++ up > down) break;

        // 右上角开始，从上到下
        for (let i = up; i <= down; i ++ ) ans[i][right] = num ++ ;
        if (-- right < left) break;
        
        // 右下角开始，从右到左
        for (let i =right; i >= left; i -- ) ans[down][i] = num ++ ;
        if (-- down < up) break;

        // 左下角开始，从下到上
        for (let i = down; i >= up; i -- ) ans[i][left] = num ++ ;
        if (++ left > right) break;
    }
    return ans;
};