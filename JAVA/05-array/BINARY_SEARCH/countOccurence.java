public class countOccurence {
    public static void main(String[] args) {
        int[] n = {10, 20, 20, 20, 30, 40};
        int target = 20;
        int firstoccurence = -1;
        int left = 0;
        int right = n.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (n[mid] == target) {
                firstoccurence = mid;
                right = mid - 1;
            } else if (n[mid] < target) {
                left = mid + 1;

            } else {
                right = mid - 1;
            }

        }
        left = 0;
        right = n.length - 1;
        int lastoccurence = -1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (n[mid] == target) {
                lastoccurence = mid;
                left = mid + 1;
            } else if (n[mid] < target) {
                left = mid + 1;
            } else {
                right = mid -1;
            }
        }
        int count = 0;
        count = lastoccurence - firstoccurence + 1;
        System.out.println("count occuurence total is :"+count );
}
      
    }
    

