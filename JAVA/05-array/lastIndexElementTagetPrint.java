public class lastIndexElementTagetPrint {
    public static void main(String[] args) {
        /* */ 
        int[] n = { 10, 20, 30, 20, 40, 20 };
        int lastIndex = -1;
        int target = 20;
        for (int i = 0; i < n.length; i++) {
            if (n[i] == target) {
                lastIndex = i;
            }

        }
        System.out.println("last occurence :"+lastIndex);
    }
    
}
