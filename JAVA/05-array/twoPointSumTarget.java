public class twoPointSumTarget {
public static void main(String[] args) {
    int[] n = {1, 2, 3, 4, 6};
    int target = 7;
    int left = 0;
    int right = n.length - 1;
    boolean found = false;
    while (left < right) {
        int sum = n[left] + n[right];
        if (sum == target) {
            System.out.println("left is : " + n[left] +" "+ "right is :" +" "+ n[right]);
            found = true;
            break;

        } else if (sum < target) {
            left++;
        } else {
            right--;
        }

    }
    System.out.println("find is :"+found);
}

    
}