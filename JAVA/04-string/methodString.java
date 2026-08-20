public class methodString {
    public static void main(String[] args) {
        String name = "sachin   w ";
        System.out.println(name.length());
        System.out.println(name.charAt(name.length() - 1));
        System.out.println(name.toLowerCase());
        System.out.println(name.toUpperCase());
        System.out.println(name.trim());
        System.out.println(name.substring(1, 4));//last index incluse nhi hota hai 

        String fullName = "sachin kumar";
        System.out.println(fullName.substring(0, 6));// substring orginal string ko change nhi krta hai ok

        String lastName = "kumar sonu";
        System.out.println(lastName.contains("kumar"));
        System.out.println(lastName.contains("rahul"));
        System.out.println(lastName.contains("sonu"));
        System.out.println(lastName.contains("kum"));
        System.out.println(lastName.contains("so"));
        System.out.println(lastName.startsWith("kumar"));
        System.out.println(lastName.startsWith("sonu"));
        System.out.println(lastName.startsWith("kum"));
        /* endswith()*/  
        System.out.println(lastName.endsWith("sonu"));
        System.out.println(lastName.endsWith("kumar"));

        System.out.println(lastName.indexOf("k"));
        System.out.println(lastName.lastIndexOf('u'));
     /* indexOf() + starting position*/ 
        System.out.println(lastName.indexOf('u',2));
          String names = "banana";

          System.out.println(names.indexOf('a', 2));
          String word = "bachha";
          System.out.println(word.indexOf('a', 3));
          
          String a = "sachin";
          String b = "sachin";
          System.out.println(a == b);
          System.out.println(a.equals(b));
          String c = "dogs";
          String d = "elephant";
          System.out.println(c.equals(d));
          System.out.println(c == d);
          String f = "Sachin";
          String g = "sachin";
         /* equals()
         → content + case dono compare

          equalsIgnoreCase()
         → content compare, case ignore */  

         System.out.println(f.equals(g));
         System.out.println(f.equalsIgnoreCase(g));
         /* isEmpty()
         Check karta hai ki String ki length 0 hai ya nahi.
         */

         String n = "";
         System.out.println(n.isEmpty());
         String nu = " ";
         System.out.println(nu.isEmpty());

         /* isBlank()
         check karta hai ki String mein sirf whitespace hai ya String empty hai.
         */
         String s = "  ";
         System.out.println(s.isBlank());

         /* replace()
         String ke andar kisi character ya sequence ko doosre character/sequence se replace karta hai.
         */
         String fruit = "orange";
         System.out.println(fruit.replace("o", "O"));
         

         String fullname = "sachin kumar";
         System.out.println(fullname.replace("sachin", "sonu"));



         String language = "java java java";
         System.out.println(language.replace("java", "python"));
         System.out.println(language);// string are immutabal hota hai 

         /*replaceFirst()
         Sirf first matching occurrence replace karega.
          */
         
         String programeLanguage = "java java java";
         System.out.println(programeLanguage.replaceFirst("java", "javascript"));
         /*. replaceAll()
         Ye matching occurrences ko replace karta hai.
          */
         System.out.println(programeLanguage.replaceAll("java", "python"));
         /* 
         replace()
         → literal character/string replacement

           replaceFirst()
          → first matching occurrence

           replaceAll()
           → all matching occurrences
           */  
        

        
          
























    }
    
}
