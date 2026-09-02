public class sumTaget {
    public static void main(String[] args) {
        int[] n = {10, 20, 30, 40, 50, 60};
        int target = 80;
        int left = 0;
        int right = n.length - 1;
        boolean found = false;
        while (left <right) {
            int sum = n[left] + n[right];
            if (sum == target) {
                found = true;
                System.out.println("left is :" + n[left] + " " + "right is :" + " " + n[right]);
                break;
            } else if (sum < target) {
                left++;

            } else {
                right--;
            }

        }
        System.out.println("found  target sum is : "+ found);
    }
    
}
