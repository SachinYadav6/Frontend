public class numberTargetSearch {
    public static void main(String[] args) {
        /* Basic Search */ 
        int[] n = { 10, 20, 30, 40, 50 };
        int target = 30;
        for (int i = 0; i <n.length; i++) {
            if (n[i] == target) {
                System.out.println("taget number mil gya : "+target);
                break;
            }
        }

    }
}
