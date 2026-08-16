public class oneToTwentyNumberDivisibleByfiveNumberPrint {
    static void divisibleByFivenumberPrint() {
        int sum = 0;
        for (int i = 1; i <= 20; i++) {
            if (i % 5 == 0) {
                sum +=i;
            }

        }
        System.out.println(sum);
    }
    public static void main(String[] args) {
        divisibleByFivenumberPrint();
    }
    
}
