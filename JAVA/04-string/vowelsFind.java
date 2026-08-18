public class vowelsFind {
    public static void main(String[] args) {
        String name = "sachin";
        int count = 0;
        for (int i = 0; i < name.length(); i++) {
            if (name.charAt(i) == 'a'||
            name.charAt(i)=='e'||
            name.charAt(i)=='i'||
            name.charAt(i)=='o'||
            name.charAt(i)=='u'
                    
        ) {
                count++;
            }
        }
        System.out.println(count);
    }
    
}
