public class evencountrecurion {
    static int evencount(int n) {
        if (n > 20) {
            return 0;
        }
        int count = evencount(n + 1);
        if (n % 2 != 1) {
            count++;
        }
        return count;
    }
    public static void main(String[] args) {
        int evencount = evencount(1);
        System.out.println(evencount);
    }
    
}
