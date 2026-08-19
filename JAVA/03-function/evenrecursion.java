public class evenrecursion {
    static void evennumber(int n) {
        if (n > 20) {
            return;
        }
        if (n % 2 != 1) {
            System.out.println(n);
        }
        evennumber(n + 1);

    }
    public static void main(String[] args) {
        evennumber(1);
    }
    
}
