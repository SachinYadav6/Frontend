public class secondmaxnumberfind {
    public static void main(String[] args) {
        int[] n = { 6, 0, 15, 1, 5 };
        int max = n[0];
         int secondmax =n[1];
      
       
         for (int i = 2; i < n.length; i++) {

             if (n[i] > max) {
                 secondmax = max;
                 max = n[i];

             } else if (n[i] > secondmax) {
                 secondmax = n[i];

             }

         }
        System.out.println(secondmax);
        System.out.println(max);
       
    }
}
