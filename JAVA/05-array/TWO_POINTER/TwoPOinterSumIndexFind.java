public class TwoPOinterSumIndexFind {
    public static void main(String[] args) {
         int[] n= {1, 2, 3, 4, 5, 6, 7};
         int target = 8;
         int left = 0;
         int right = n.length - 1;
       
         while (left<right) {
             int sum = n[left] + n[right];
             if (sum == target) {
                 System.out.println("index is : left is: " + " " + left + " " + "value is :  " + n[left] + " "
                         + "index right is : " + "" + right + " " + "value is :  " + n[right]);
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
    }
}
