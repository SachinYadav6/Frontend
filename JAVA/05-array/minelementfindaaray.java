public class minelementfindaaray {
    public static void main(String[] args) {
        int[] n = { 10, 20, 30, 40, 50 };
        int min=n[0];
        for (int i = 1; i < n.length; i++) {
            if (n[i] < min) {
                min = n[i];
            }
        }
        System.out.println(min);
    }
    
}
