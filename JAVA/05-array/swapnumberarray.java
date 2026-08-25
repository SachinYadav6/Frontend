public class swapnumberarray {
    public static void main(String[] args) {
        int[] n = { 12, 34, 45, 67, 56 };
        for(int left=0,right=n.length-1;left<right;
            left++,
            right--

                ) {

            int temp = n[left];
            n[left] = n[right];
            n[right] = temp;

        }
        for (int i = 0; i < n.length; i++) {
            System.out.println(n[i]);
        }
    }
    
}
