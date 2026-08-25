public class secondminDuplicatefindnumber {
    

    public static void main(String[] args) {
        int[] n = { 20, 50, 80, 20, 30,50,5 };
        int min;
        int secondmin;
        if (n[0] < n[1]) {
            min= n[0];
            secondmin = n[1];
        } else {
            min= n[1];
            secondmin = n[0];
        }
        for (int i = 2; i < n.length; i++) {
            if (n[i] < min) {
                secondmin = min;
                min = n[i];
            } else if (n[i] < secondmin && n[i] != min) {
                secondmin =n[i];
            }
        }
        System.out.println("second max is :" + secondmin);
        System.out.println("minnumber is :"+min);
    }
    

    
}


/* 
Second MIN:
new < min
duplicate → n[i] != min
*/ 
