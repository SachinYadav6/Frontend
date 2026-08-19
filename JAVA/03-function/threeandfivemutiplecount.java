public class threeandfivemutiplecount {
    static void threefivenumbercount() {
        int count = 0;
        for (int i = 1; i <= 20; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                count++;
            }
        }
        System.out.println(count);
    }
    public static void main(String[] args) {
        threefivenumbercount();
    }
}
