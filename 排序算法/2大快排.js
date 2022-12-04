/*
    快速排序算法思路:
    1.先从数列中取出一个数作为基准数。
    2.分区过程，将比这个二数大的数全放到它的右边，小于或等于它的数全放在它的左边。
    3.再对左右区间重复第二步，直到各区间只有一个数
*/

/*
    快排是不稳定的。
    时间复杂度: 一趟O(n),每一躺的话是log2n;
    所以是O(nlog2n); 即O(nlogn);
    如果运气不好 基准正好最大或者最小就会恶化，变到O(n^2)
*/
let arr1 = [5, 3, 7, 6, 4, 1, 0, 2, 9, 10, 8];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let i = low;
    let j = high;
    //以arr[i] 为基准
    while (i < j) {
      //从后向前
      while (i < j && arr[j] >= arr[i]) {
        j--;
      }
      //交换
      swap(arr, i, j);
      //从前向后
      while (i < j && arr[i] <= arr[j]) {
        i++;
      }
      //交换
      swap(arr, i, j);
    }
    //递归进行左右两个部分快排
    quickSort(arr, low, j - 1);
    quickSort(arr, j + 1, high);
  }
  return arr;
}

console.log(quickSort(arr1, 0, arr1.length - 1));

/*
# 快速排序

**快速排序**是基于分治思想的一种排序算法，本质在于交换，即通过交换使得左侧元素均小于右侧元素。 
# 步骤：
 1. 将数列 q[n] 中的任意一个数设为 x 
 2. 遍历数列与 x 进行比较 : 设置两个下标分别从左右边界出发，与 x 比较
 3. 左下标 i 满足 q[i] < x 时 , i ++    否则 i 停止右移
右下标 j 满足 q[j] > x 时 , j ++    否则 j 停止左移
此时交换 q[i] q[j]  使  左侧数列递增且均小于 x  ，右侧数列递增且均大于 x
*/