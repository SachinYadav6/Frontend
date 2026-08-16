public class oneToTwentyNumberSum {
    static void sumAndCountNumberPrintDivisibleBythree() {
        int sum = 0;
        int count = 0;
        for (int i = 1; i <= 20; i++) {
            if (i % 3 == 0) {
                count++;
                sum += i;
            }
        }
        System.out.println(count);
       System.out.println(sum);

    }
    public static void main(String[] args) {
        sumAndCountNumberPrintDivisibleBythree();
    }
    
}
