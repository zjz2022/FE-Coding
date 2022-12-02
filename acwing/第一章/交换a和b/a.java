// 交换a和b，利用异或
public class a {
    public static void main (String[] args) {
        int a = 1, b = 2;
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        System.out.println("a="+a);
        System.out.println("b="+b);
    }
}