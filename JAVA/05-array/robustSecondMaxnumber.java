public class robustSecondMaxnumber {
    public static void main(String[] args) {
        int[] n = { 20, 50, 40, 80 };
        int max;
        int secondmax;
        if (n[0] > n[1]) {
            max = n[0];
            secondmax = n[1];
        } else {
            max = n[1];
            secondmax = n[0];

        }
        for (int i = 2; i < n.length; i++) {
            if (n[i] > max) {
                secondmax = max;
                max = n[i];
            } else if (n[i] >secondmax) {
                secondmax = n[i];
            }
        }
        System.out.println("secondmax number:" + secondmax);
        System.out.println("max number is :"+max);
    }
    
}
