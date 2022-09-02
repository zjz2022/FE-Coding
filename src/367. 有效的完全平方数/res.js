/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let l = 0, r = num;
    while (l < r)
    {
        let mid = l + r + 1 >> 1;
        if (mid * mid <= num) l = mid;
        else r = mid - 1;
    }
    if (l * l == num) return true;
    else return false;
};