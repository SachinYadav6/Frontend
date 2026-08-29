public class foundTargetElement {
    public static void main(String[] args) {
        int[] n = {5, 10, 15, 20, 25, 30};
        int target = 18;
        int left = 0;
        int right = n.length - 1;
        boolean found = false;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (n[mid] == target) {
                found = true;
                break;

            } else if (n[mid] < target) {
                left = mid + 1;

            } else {
                right = mid - 1;
            }

        }
        if (found) {
            System.out.println("found target a number");
        }
        else {
            System.out.println("not found a taget number");
        }
    }
    
}
