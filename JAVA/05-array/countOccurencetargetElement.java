public class countOccurencetargetElement {
    public static void main(String[] args) {
        /* count occurence element*/
        int[] n = {10, 20, 10, 30, 10, 40};
        int target = 10;
        int count=0;
        for (int i = 0; i < n.length; i++) {
            if (n[i] == target) {
                count++;
            }
        }
       System.out.println("count occurence is :"+count);
    }
    
}
