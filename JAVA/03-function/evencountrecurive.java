public class evencountrecurive {
    static int evensum(int n) {
        if (n > 20) {
            return 0;
        }
        int sum = evensum(n + 1);
        if (n % 2 != 1) {
            sum += n;
        }
        return sum;
    }
    public static void main(String[] args) {
        int sum = evensum(1);
        System.out.println(sum);
    }
    
}
