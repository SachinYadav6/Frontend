public class namevowelprintrecursion {
    static int vowelprint(int index, String name) {
        if (index > name.length() - 1) {
            return 0;
        }
     int count=   vowelprint(index+1, name);
        if(name.charAt(index)=='a'||
        name.charAt(index)=='e'
                ||name.charAt(index)=='i'||
                name.charAt(index)=='o'||
                name.charAt(index) == 'u'
                
        ) {
            count++;
        }
        return count;
    }
    public static void main(String[] args) {
        int count = vowelprint(0, "sachin");
       System.out.println(count);
    }
}
