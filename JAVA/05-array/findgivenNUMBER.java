public class findgivenNUMBER {

    public static void main(String[] args) {
        int[] n = { 1, 2, 3, 4, 5 };
        int x = 3;
        for (int i = 0; i <n.length; i++) {
            if (n[i] == x) {
                System.out.println("find of number of index is :"+i);

            }
        }
    }
}