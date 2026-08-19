public class evenSum {
    static void EvenSum() {
        int sum = 0;
        for (int i = 1; i <= 20; i++) {
            if (i % 2 != 1) {
                sum += i;

            }
        }
        System.out.println(sum);
    }
    public static void main(String[] args) {
        EvenSum();
    }
    
}
