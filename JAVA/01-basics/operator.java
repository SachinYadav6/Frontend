public class operator {
    public static void main(String[] args) {
        /* arithmatic operator*/ 
       double a = 5;
       double b = 90;
        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);
        /* assinment operator*/

        int number = 56;
        System.out.println(number =5);
        System.out.println(number += 2);
        System.out.println(number % 2);
        System.out.println(number/4);
        System.out.println(number *= 8);
        System.out.println(number -= 6);
        
         /* retional operator*/ 
         int c = 8;
         int d = 8;
         System.out.println(c == d);
         System.out.println(c != 4);
         System.out.println(c>=d);
         System.out.println(c > d);
         System.out.println(c < d);
         System.out.println(c <= d);
         
         /* logical oprator*/  
         int x = 89;
         int z = 90;
         System.out.println((x<z)&&(z>x));
         System.out.println((x < z) || (z >= x));
         System.out.println((x<z)!=(z>x));
         


         /*unary opertor*/
         int r = 90;
         System.out.println(r++);
         System.out.println(--r);
         System.out.println(++r);
         System.out.println(r--);

         /*ternary opertor*/  
         int e = 56;
         boolean even= e %2 == 0 ? true : false;
         System.out.println(even);

    

    
    }


    
}