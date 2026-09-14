package JAVA.ARRAYLIST;
import  java.util.ArrayList;

public class Demo {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        // add element
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(20);
        list.add(80);
        list.add(50);
        System.out.println(list);

        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
          
            

        
        
        
    }
}
