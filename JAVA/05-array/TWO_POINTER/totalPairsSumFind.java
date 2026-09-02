public class totalPairsSumFind {
    public static void main(String[] args) {
      int[] n= {1, 2, 3, 4, 5, 6, 7};
      int target = 8;
      int left = 0;
      boolean found = false;
      int right = n.length - 1;
      while (left < right) {
          int sum = n[left] + n[right];
          if (sum == target) {
              System.out.println("left is :" + n[left] + " " + "right is : " + " " + n[right]);
              found = true;
              left++;
              right--;

          }
          else if (sum < target) {
    left++;
}
else {
    right--;
}
          

      }
      
      System.out.println("found target sum is : "+ found);


    }
    
}
