public class returnRecurivevlue {
    static int oddnumber(int n) {
        if (n > 21) {
            return n;
        }
        if (n % 2 != 0) {
            System.out.println(n);
        }
     return  oddnumber(n + 1);
       

    }
    public static void main(String[] args) {
        oddnumber(1);
    }
    
}
