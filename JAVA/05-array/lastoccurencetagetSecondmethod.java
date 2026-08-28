public class lastoccurencetagetSecondmethod {
    public static void main(String[] args) {
        /* last occurence elemnt*/ 
        int[] n = { 10, 20, 30, 20, 40, 20 };
        int target = 20;
        for (int i = n.length - 1; i >= 0; i--) {
            if (n[i] == target) {
                System.out.println("last occurence is :"+i);
                break;
            }
        }
    }
}
