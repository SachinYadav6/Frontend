public class firstmaxAndSecondMaxNumber {
public static void main(String[] args) {
    int[] n = { 10, 30, 40, 60, 80 };

    int max;
    int secondmax;
    if (n[0] > n[1]) {
        max = n[0];
        secondmax = n[1];

    }
    else {
        max = n[1];
        secondmax = n[0];
    }
    for (int i = 2; i < n.length; i++) {
        if (n[i] > max) {
            secondmax = max;
            max = n[i];
        } else if (n[i] > secondmax) {
            secondmax = n[i];

        }

    }
     System.out.println("secondmax :" + secondmax);
          System.out.println("max :"+max);
}
    
}
