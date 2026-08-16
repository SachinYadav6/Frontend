public class oneTotwentyNumberDivisibleByThreeAndSumAndCount {
    static void sumAndCountPrintNUmber() {
        int sum = 0;
        int count = 0;
        for (int i = 1; i <= 20; i++) {
            if (i % 2 == 0 && i % 3 == 0) {
                count++;
                sum += i;
            }
        }
        System.out.println(count);
        System.out.println(sum);
    }

    public static void main(String[] args) {
        sumAndCountPrintNUmber();
        
    }
    
}
