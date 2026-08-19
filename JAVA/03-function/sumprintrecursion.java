public class sumprintrecursion {
    static int sum(int n) {
        if (n > 20) {
            return 0;
        }
        int sum = sum(n + 1);
        if (n % 2 != 0) {
            sum += n;
        }
        return sum;
    }
    public static void main(String[] args) {
        int sum = sum(1);
        System.out.println(sum);
    }
}
