public class DEMo {
    public static void main(String[] args) {
      int[] n = {2, 1, 5, 1, 3, 2};
      int k = 3;
      int windowSum = 0;
      //   firstwindowSum
      for (int i = 0; i < k; i++) {
          windowSum = windowSum + n[i];
      }
      System.out.println(windowSum);
      int maxSum = windowSum;
    //   window slide
       for (int right = k; right < n.length; right++) {

            windowSum = windowSum - n[right - k];
            windowSum = windowSum + n[right];

            maxSum = Math.max(maxSum, windowSum);
        }
    System.out.println("maximum sum is :" + maxSum);
    


    }

    
}