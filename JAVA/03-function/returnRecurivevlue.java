public class returnRecurivevlue {
    static int oddnumber(int n) {
        if (n > 20) {
            return n;
        }
        if (n % 2 != 0) {
            System.out.println(n);
        }
     return  oddnumber(n + 1);
       

    }
    public static void main(String[] args) {
        int oddnumberPrint = oddnumber(1);
      System.out.println(oddnumberPrint);
    }
    
}
