public class sum3multiplenumber {
    static void print3multiplesum() {
        int sum = 0;
        for (int i = 3; i <= 20; i += 3) {
            sum += i;
        }
        System.out.println(sum);
    }
    public static void main(String[] args) {
        print3multiplesum();
    }
}
