var sortList = function (head) {
  //特判
  if (!head) return null;
  //全部切断
  let s = [];
  while (head) {
    let t = head.next;
    head.next = null;
    s.push(head);
    head = t;
  }
  //排序
  s.sort((a, b) => a.val - b.val);
  //重组
  for (let i = 0; i < s.length - 1; i++) {
    s[i].next = s[i + 1];
  }
  return s[0];
};

/*
# 归并排序

**归并排序**是基于分治思想的一种算法，本质在于把数列均分，递归再归并为一个有序数列。

# 步骤

 1. 定义下标中点 mid = (l + r)/2，得到 (l , mid） (mid + 1, r) 两个数列
 2. 递归调用函数，对两个数列分别排序
 3. 把排序完成的两个数列进行比较，较小值顺序放进新的数组中
*/