public class givenmaxarray {
    public static void main(String[] args) {
        int[] n = { 60, 40, 70, 100, 700, 5 };
        int max = n[0];
        for (int i = 1; i < n.length; i++) {
            if (n[i] > max) {
                max = n[i];
            }
        }
        System.out.println(max);
    }
    
}