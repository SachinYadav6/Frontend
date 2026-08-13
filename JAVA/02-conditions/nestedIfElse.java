public class nestedIfElse {
    public static void main(String[] args) {
        int number = 27;
        if (number % 2 == 0) {
            System.out.println("even number");
           

        } else {
             if (number % 2 == 1) {
                System.out.println("odd number");
            } else if (number % 3 == 0) {
                System.out.println("number is divide by 3");

            } else {
                System.out.println("not divisible by 3");
            }
            
        }
    }
    
}
