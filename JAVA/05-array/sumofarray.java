public class sumofarray {
    public static void main(String[] args) {
        int[] n = { 10, 20, 30, 40, 50,60 };
        int sum = 0;
        for (int i = 0; i <n.length; i++) {
            sum += n[i];
        }
        System.out.println(sum);
    }
    
}
