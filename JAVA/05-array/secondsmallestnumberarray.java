public class secondsmallestnumberarray {
    public static void main(String[] args) {
        int[] n = {20, 50, 10, 40, 5};
        int min = n[0];
        int secondmin = n[1];
        for (int i = 2; i < n.length; i++) {
            if (n[i] < min) {
                secondmin = min;
                min = n[i];

            } else if (n[i] < secondmin) {
                secondmin = n[i];

            }

        }
        System.out.println(secondmin);
        System.out.println(min);

    }
    
}
