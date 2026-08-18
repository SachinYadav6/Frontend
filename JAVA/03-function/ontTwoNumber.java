public class ontTwoNumber {
    static void onetwotenNumbersPrint(int n) {
        if (n >10) {
            return;
        }
        onetwotenNumbersPrint(n+1);
        System.out.println(n);
    }
    public static void main(String[] args) {
       onetwotenNumbersPrint(1);
    }

    
}