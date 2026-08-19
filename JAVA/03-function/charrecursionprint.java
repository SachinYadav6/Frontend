public class charrecursionprint {
    static void charprint(int index,String name) {
        if (index> name.length()-1) {
            return;
        }
        charprint(index+1,name);
        System.out.println(name.charAt(index));
       
    }
    public static void main(String[] args) {
        charprint(0,"sachin");
    }
}
