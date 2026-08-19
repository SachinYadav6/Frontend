public class evenCount {
    static void evencount() {
        int count = 0;
        for (int i = 1; i <= 20; i++) {
            if (i % 2 != 1) {
                count++;
            }
        }
        System.out.println(count);
    }
    public static void main(String[] args) {
        evencount();
    }
    
}
