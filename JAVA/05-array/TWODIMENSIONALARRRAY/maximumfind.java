public class maximumfind {
    public static void main(String[] args) {
        int[][] n = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
        };
        int max=n[0][0];
        for (int i = 0; i < n.length; i++) {
            for (int j = 0; j < n[i].length; j++) {
                if (n[i][j] > max) {
                    max = n[i][j];
                }

            }
        }
System.out.println(max);
    }
    
}
