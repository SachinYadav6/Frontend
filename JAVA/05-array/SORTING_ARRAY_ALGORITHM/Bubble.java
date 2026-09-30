package SORTING_ARRAY_ALGORITHM;

public class Bubble {
    public static void main(String[] args) {
        int[] n = { 12, 34, 6, 7, 12, 10 };
        for (int i = 0; i < n.length; i++) {
            //   adjacent compare ke liye 
            for (int j = 0; j < n.length - i - 1; j++) {
                int temp = n[j];
                n[j] = n[j + 1];
                n[j + 1] = temp;
                

            }
        }
        for (int i = 0; i < n.length; i++) {
        System.out.println(n[i]);
    }
    }
    
}
