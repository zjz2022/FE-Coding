/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
    // 定义一个一维数组，用于存放元素
    let results = []
    // 如果二维数组为空，则结束循环
    if (matrix == null || matrix.length == 0) { return results }
    // 限制上下左右边界
    let u = 0, d = matrix.length - 1, l = 0, r = matrix[0].length - 1
    while (true) {
        // 从左到右
        for (let i = l; i <= r; i++) { results.push(matrix[u][i]) } ++u
        if (u > d) { break }
        // 从上到下
        for (let i = u; i <= d; i++) { results.push(matrix[i][r]) } --r
        if (r < l) { break }
        // 从右到左
        for (let i = r; i >= l; i--) { results.push(matrix[d][i]) } --d
        if (d < u) { break }
        // 从下到上
        for (let i = d; i >= u; i--) { results.push(matrix[i][l]) } ++l
        if (l > r) { break }
    }
    return results
};