public class recursionDemo1 {
    static void PrintNumber(int n) {
        if (n > 5) {
            return;
        }
        PrintNumber(n + 1);
        System.out.println(n);
        

    }

    public static void main(String[] args) {
              PrintNumber(1);
      
    }
    
}
