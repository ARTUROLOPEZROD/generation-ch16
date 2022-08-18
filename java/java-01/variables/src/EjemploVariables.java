import java.sql.SQLOutput;

public class EjemploVariables {
    public static void main (String[] args) {                   // siempre poner ;
        String nombre= "Hugo";                                  // se escrime con mayusculas la primera letra
        String saludo= "Hola es es un ejemplo de variables";

        System.out.println (saludo + " " + nombre);               // es una funcion que invocada por. manda a hacer algo --imprimir
        char espacio = '\u0040';                                   // char es para caracteres un solo caracter y em comillas simples
        char caracter = 'a';
        System.out.println("espacio = " + espacio);                 // char tipo primitivo --
        System.out.println("char corresponde en byte: " + Character.BYTES);  // para conocer el tamaño en bytes de caracter 'a'
        System.out.println("char corresponde en bits: " + Character.SIZE);    // para conocer el tamaño de bits de caracter 'a'
        System.out.println(" char valor maximo: " + Character.MAX_VALUE);
        System.out.println(" char valor minimo: " + Character.MIN_VALUE);

        int numeroEntero = 2;
        System.out.println("numeroEntero = " + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " + Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);

        float numeroFloat = 0.00000000015f;       //1.5e-10f                   // f refiere que el num de valor float
        System.out.println("numeroFloat = " + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);

        double numeroDouble = 3.444567E39;
        System.out.println("numeroDouble = " + numeroDouble);
        System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("double valor maximo: " + Double.MAX_VALUE);
        System.out.println("double valor minimo: " + Double.MIN_VALUE);

        boolean valorBoolean = (3-2 == 1);
        System.out.println("valorBoolean = " + valorBoolean);

        long valorLong = 32;
        System.out.println("valorLong = " + valorLong);
        System.out.println("long corresponde en byte: " + Long.BYTES);
        System.out.println("long corresponde en bits: " + Long.SIZE);
        System.out.println("long valor maximo: " + Long.MAX_VALUE);
        System.out.println("long valor minimo: " + Long.MIN_VALUE);

        short valorShort = 1;
        System.out.println("valorShort = " + valorShort);
        System.out.println("Short corresponde en byte: " + Short.BYTES);
        System.out.println("Short corresponde en bits: " +Short.SIZE);
        System.out.println("Short valor maximo: " + Short.MAX_VALUE);
        System.out.println("Short valor minimo: " + Short.MIN_VALUE);

        byte valorByte = 1;
        System.out.println("valorByte = " + valorByte);
        System.out.println("Byte corresponde en byte: " + Byte.BYTES);
        System.out.println("Byte corresponde en bits: " + Byte.SIZE);
        System.out.println("Byte valor maximo: " + Byte.MAX_VALUE);
        System.out.println("Byte valor minimo: " + Byte.MIN_VALUE);




    }
}
