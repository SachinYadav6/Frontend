public class oddNumber {
    static void printOddNumber() {
        for (int i = 1; i <= 10; i++) {
            if (i % 2 != 0) {
                System.out.println(i);
            }
        }
        
    }

    public static void main(String[] args) {
        printOddNumber();
        
    }
    
}
