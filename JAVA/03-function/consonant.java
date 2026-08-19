public class consonant {
    static int consonantcount(int index, String name) {
        if (index > name.length() - 1) {
            return 0;
        }
        int count = consonantcount(index + 1, name);
        if(!(name.charAt(index)=='a'||
        name.charAt(index)=='e'||
        name.charAt(index)=='i'||
        name.charAt(index)=='o'||
        name.charAt(index)=='u'
        ))
        {
            count++;
        }
        return count;
      

    }

    public static void main(String[] args) {
        int consonantCount = consonantcount(0, "sachinkumaryadav");
        System.out.println(consonantCount);
        
    }
    
}
