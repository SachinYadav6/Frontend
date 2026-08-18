public class oneTWentynumber {
    static void printOnetwoTwentyNumberPrint(int n) {
        if (n > 20) {
            return;// recurive funtion rokne ka contion ki jabmeranumber 20>20 ho jaye tab rokh do ok
        }
        printOnetwoTwentyNumberPrint(n + 1);// matlab hota ki recuirve ftn parametr ko update krna ok jat tak or pahle one to 20 tak recuive call hooga or jab recive 21>20 true hoga fir bolo a uske wrwp ftn call hoga fir n=20,n=19 value print hone laga ok
        System.out.println(n);

    }

    public static void main(String[] args) {
        printOnetwoTwentyNumberPrint(1);
        
    }
     
}
