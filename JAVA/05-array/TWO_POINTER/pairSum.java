public class pairSum {
    public static void main(String[] args) {
        int[] n = { 10, 20, 30, 40, 50, 60 };
        int target = 70;
        int left = 0;
        int right = n.length - 1;
       
        while (left < right) {
            int sum = n[left] + n[right];
            if (sum == target) {
                System.out.println("taget sum is : find ");
                break;
            } else if (sum < target) {
                left++;

            } else {
                right--;
            }

        }
      
        
    }
    
}
