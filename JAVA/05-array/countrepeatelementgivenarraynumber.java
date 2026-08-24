public class countrepeatelementgivenarraynumber {
    public static void main(String[] args) {
        int[] n = { 10, 20, 30, 10, 10, 40, 90, 10, 56, 80 };
        int count = 0;
        for (int i = 0; i < n.length; i++) {
            if (n[i] == 10) {
                count++;
            }
        }
        System.out.println(count);
    }
}
