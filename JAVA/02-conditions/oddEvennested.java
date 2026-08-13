public class oddEvennested {
    public static void main(String[] args) {
        int number = 10;
        if (number % 2 == 0) {
            System.out.println("even number");
            if(number%3==0){
            System.out.println("number divide by 3");

        } else {
            System.out.println("not divide by 3");
        }
        } else {
            System.out.println("odd number");

        }
    }
    
}
