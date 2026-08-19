public class Asccisumstring {
    static int sumascii(int index, String name) {
        if (index > name.length() - 1) {
            return 0;
        }
        int sum = sumascii(index + 1, name);
        sum += name.charAt(index);
        return sum;

    }
    public static void main(String[] args) {
        int sumasii = sumascii(0, "sachin");
        System.out.println(sumasii);
    }
    
}
