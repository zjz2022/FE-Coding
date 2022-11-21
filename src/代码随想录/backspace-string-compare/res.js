/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let skipS = 0;
    let skipT = 0;
	//大循环
    while (i >= 0 || j >= 0)
    {
    //删除S的无效字符
        while (i >= 0)
        {
            if (S[i] === '#')
            {
                skipS ++ ;
                i -- ;
            }
            else if (skipS > 0)
            {
                skipS -- ;
                i -- ;
            }
            else break;
        }
	//删除T的无效字符
        while ( j >= 0)
        {
            if (T[j] === '#')
            {
                skipT ++ ;
                j -- ;
            }
            else if (skipT > 0)
            {
                skipT -- ;
                j -- ;
            }
            else break;
        }

        if (S[i] !== T[j]) return false;
        i -- ;
        j -- ;
    }
    return true;
};
