public class onetotwentyoddnumber {
    static void onetotwentyprintoddnumber(int n) {
        if (n > 20) {
            return;
        }
        if (n % 2 != 0) {
            System.out.println(n);
        }
        onetotwentyprintoddnumber(n + 1);
        
    }
    public static void main(String[] args) {
        onetotwentyprintoddnumber(1);
    }
    
}
