// 整数转二进制

#include <iostream>
#include <string.h>

using namespace std;

int main()
{
    int n = 4;
    for (int k = 8; k >= 0; k -- ) cout << (n >> k & 1);
    return 0;
}