public class EvenCountRecursion {
    
    static int printcountEvennumber(int n) {
       
        if (n > 20) {
            return 0;

        }
        int count = printcountEvennumber(n + 1);
         
     
         if (n % 2 == 0) {
             count++;
         }
         return count;
        
        }

    public static void main(String[] args) {
        System.out.println(printcountEvennumber(1));
        
    }
    
}
