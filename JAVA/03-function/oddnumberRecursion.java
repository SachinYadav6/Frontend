public class oddnumberRecursion {
    static void oddnumber(int n) {
        if (n > 10) {
            return;
        }
        if (n % 2 != 0) {
            System.out.println(n);
        }
        oddnumber(n+1);
    }
    public static void main(String[] args) {
        oddnumber(1);
    }
    
}
