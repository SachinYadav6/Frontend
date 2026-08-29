public class pairsumFound {
    public static void main(String[] args) {
        int[] n = { 10, 20, 30, 40, 50, 60 };
        int target = 70;
        int left = 0;
        int right = n.length - 1;
        boolean found=false;
        while (left < right) {
            int sum = n[left] + n[right];
            if (sum == target) {
                found = true;
                break;
            } else if (sum < target) {
                left++;

            } else {
                right--;
            }

        }
        if (found) {
            System.out.println("taget pair sim is found :");
        }
        else {
            System.out.println("target sum is not found :");
        }
        
    }
    
}