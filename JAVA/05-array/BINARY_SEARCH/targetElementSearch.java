public class targetElementSearch {
    public static void main(String[] args) {
        int[] n = {10, 20, 30, 40, 50, 60, 70};
        int target = 20;
        int left = 0;
        int right = n.length - 1;
        while (left <= right) {
           int mid = (left+right) / 2;

    if (n[mid] == target) {
        System.out.println("found target element :" + target);
        break;
    } 
    else if (n[mid] < target) {
        left = mid + 1;
    } 
    else {
        right = mid - 1;
    }
        }
    }
}