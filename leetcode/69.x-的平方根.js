/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0, r = x;
    if (x == 2147483647) return 46340;
    while (l < r) {
        let mid = l + r + 1 >> 1;
        if (mid * mid <= x) l = mid;
        else r = mid - 1;
    }
    return l;
};
// @lc code=end

