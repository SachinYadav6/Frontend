public class firstOccurenceElement {
    public static void main(String[] args) {
        int[] n = {10, 20, 20, 20, 30, 40};
        int target = 20;
        int left = 0;
        int index = -1;
        int right = n.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (n[mid] == target) {
                index = mid;
                right = mid - 1;
            } else if (n[mid] < target) {
                left = mid + 1;

            } else {
                right = mid - 1;
            }
        }
        System.out.println("index occurnce is :"+index);
    }
    
}
