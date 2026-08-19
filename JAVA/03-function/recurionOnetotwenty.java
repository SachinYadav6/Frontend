public class recurionOnetotwenty {
    static int countprintoddnumber(int n) {
       
        if (n > 20) {
            return 0 ;
        }
        
      int count=  countprintoddnumber(n+1);
       
      if (n % 2 != 0) {
          count++;
      }
      return count;
      
    }
    public static void main(String[] args) {
        int count = countprintoddnumber(1);
      System.out.println(count);
    }
    
}
