public class targetElementIndexPrint {
    public static void main(String[] args) {
        /*First Occurrence */
        int[] n = {10, 20, 30, 20, 40, 20};
        int target = 20;
        for (int i = 0; i < n.length; i++) {
            if (n[i] == target) {
                System.out.println("print target element index :" + i);
                break;
            }
        }
    }
}
