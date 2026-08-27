public class firstMinAndSecondMin {
public static void main(String[] args) {
    int[] n = { 10, 30, 50, 70, 5 };
    int min;
    int secondmin;
    if (n[0] < n[1]) {
        min = n[0];
        secondmin = n[1];

    }
    else {
        min = n[1];
        secondmin = n[0];
    }
    for (int i = 2; i < n.length; i++) {
        if (n[i] < min) {
            secondmin = min;
            min = n[i];
        } else if (n[i] < secondmin) {
            secondmin = n[i];
        }
    }
    System.out.println("min:" + min);
    System.out.println("secondmin:"+secondmin);
}
    
}
