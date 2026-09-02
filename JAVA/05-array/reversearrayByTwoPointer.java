public class reversearrayByTwoPointer {
    public static void main(String[] args) {
        int[] n = { 2, 3, 5, 7, 9 };
        int left = 0;
        int right=n.length-1;
        while (left <= right) {
            int temp = n[left];
            n[left] = n[right];
            n[right] = temp;
            left++;
            right--;

        }
        for (int i = 0; i < n.length - 1; i++) {
            System.out.println("reverse number is given element is : "+n[i]);
        }
    }
}
