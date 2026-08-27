public class maxnumber {
    public static void main(String[] args) {
        int[] n = { 10, 20, 30, 40, 50 };
        int max = n[0];
        for (int i = 1; i < n.length; i++) {
            if (n[i] > max) {
                max = n[i];
            }
        }
        System.out.println(max);
    }
    
}
