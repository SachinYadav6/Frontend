public class Conversation {
    public static void main(String[] args) {

        /*
        Widening Conversion
        Narrowing Conversion
        Type Casting
        Parsing (String → primitive)
        */

        /*
        Widening Conversion
        small data se large data mein convert karte hain.
        Order: byte → short → int → long → float → double
        */

        byte number = 123;
        short numbers = number;
        System.out.println(numbers);

        /*
        Narrowing Conversion
        large data se small data mein convert karte hain.
        Order: double → float → long → int → short → byte
        */

        double n = 1234.90;
        System.out.println(n);

        float floatValue = (float) n;
        System.out.println(floatValue);

        long num = 1234567789L;
        int changeValueLong = (int) num;
        System.out.println(changeValueLong);

        /*
        Type Casting
        Type Casting ka matlab hai ek data type ko doosre
        data type mein explicitly convert karna.
        */

        short numer = 69;
        byte numberByte = (byte) numer;
        System.out.println(numberByte);

        /*
        Parsing (String → primitive)

        Parsing = String ko primitive mein convert karna.

        String → int     → Integer.parseInt()
        String → double  → Double.parseDouble()
        String → float   → Float.parseFloat()
        String → long    → Long.parseLong()
        String → short   → Short.parseShort()
        String → byte    → Byte.parseByte()
        String → boolean → Boolean.parseBoolean()

        Parsing aur Type Casting alag-alag concepts hain.

        Type Casting → ek data type se doosre data type mein conversion
        Parsing → String ko primitive data type mein conversion
        */

        String value = "45678";
        int valuesNumber = Integer.parseInt(value);
        System.out.println(valuesNumber);
    }
}

