public class swapElementPointer {
public static void main(String[] args) {
    int[] n = { 10, 20, 30, 40, 50 };
    int left = 0;
    int right = n.length - 1;
    while (left < right) {
        int temp = n[left];
        n[left] = n[right];
        n[right] = temp;

        left++;
        right--;

    }
    for (int i = 0; i < n.length; i++) {
        System.out.println("swap number elemnt is :"+n[i]);
    }
}
    
}
