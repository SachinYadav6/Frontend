public class targetElementFound {
    public static void main(String[] args) {
        /* found not found*/
          int[] n = {5, 15, 25, 35, 45};
          int target = 40;
          boolean found = false;
          for (int i = 0; i < n.length; i++) {
              if (n[i] == target) {
                  found = true;
                  break;
              }

          }
            if (found) {
                  System.out.println("element is found");
              }
              else {
            System.out.println("element is not found");
           }
    }
    
}
