public class fiveMultipleNumberSumPrint {
    static void multiplesumfive() {
        int sum = 0;
        for (int i = 5; i <= 20; i += 5) {
            sum += i;
        }
        System.out.println(sum);
    }
    public static void main(String[] args) {
        multiplesumfive();
    }
}
