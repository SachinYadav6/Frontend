public class StringBuildesr {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("sachin");
        // print name
        System.out.println(sb);
        // index postion pront 0
        System.out.println(sb.charAt(0));

        // setchartat
        sb.setCharAt(0, 'c');
        System.out.println(sb);
        // insert char
        sb.insert(2, 'e');
        System.out.println(sb);
        // delete
        sb.delete(2, 3);
        System.out.println(sb);

        // appeand last me add charr
        sb.append("kumar");
        System.out.println(sb);
        

    }
}
