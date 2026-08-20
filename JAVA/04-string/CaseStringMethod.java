public class CaseStringMethod {
    public static void main(String[] args) {
        String a = "Sachin";
String b = "sachin";
String c = "SACHIN";
String d = "Rahul";

System.out.println(a.equals(b));
System.out.println(a.equalsIgnoreCase(b));
System.out.println(a.equalsIgnoreCase(c));
System.out.println(a.equalsIgnoreCase(d));
/* equals()
→ content + case compare

equalsIgnoreCase()
→ content compare, case ignore*/ 
    }
    
}
