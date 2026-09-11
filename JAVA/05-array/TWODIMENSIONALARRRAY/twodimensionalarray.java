public class twodimensionalarray {
    public static void main(String[] args) {
        int sum = 0;
        int[][] n = {
                { 1, 2, 3 },
                { 3, 4, 5 },
                { 6, 7, 8 },
            { 7, 8, 9, }
                
                
        };
        for (int i = 0; i < n.length; i++) {
            for (int j = 0; j < n[i].length; j++) {
                // System.out.print(n[i][j] + " ");
                 sum = sum + n[i][j];
            }
           
        }
        System.out.println(sum);

    }
}
