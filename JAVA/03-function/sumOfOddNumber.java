public class sumOfOddNumber {
    static void oddNumberSum() {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            if (i % 2 != 0) {
                sum += i;

            }
        }
        System.out.println(sum);
    }
    public static void main(String[] args) {
        oddNumberSum();
    }
    
}
