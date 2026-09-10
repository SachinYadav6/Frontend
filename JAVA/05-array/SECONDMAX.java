public class SECONDMAX {
    public static void main(String[] args) {
        int[] arr = { 10, 25, 7, 30, 15 };
        int max;
        int secondmax;
      if (arr[0] > arr[1]) {
    max = arr[0];
    secondmax = arr[1];
} else {
    max = arr[1];
    secondmax = arr[0];
}
for (int i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondmax = max;
        max = arr[i];
    } else if (arr[i] > secondmax) {
        secondmax = arr[i];

    }
}
System.out.println("secondlagest is :" + secondmax);
        System.out.println("first largest is :"+ max);
    }
    
}
