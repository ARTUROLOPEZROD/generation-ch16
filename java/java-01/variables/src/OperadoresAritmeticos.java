import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int i = 5, j = 4, suma = i + j;
        System.out.println("suma = " + suma);

        System.out.println("i + j = " + (i + j));       // concatena () operacion matematica
        System.out.println("i + j = " + i + j);         // concatena solo en texto

        int resta = i - j;
        System.out.println("resta = " + resta);
        System.out.println("i - j = " + (i - j));

        int multi = i * j;
        System.out.println("multi = " + multi);
        System.out.println("i * j = " + (i * j));

        int div = i / j;
        System.out.println("div = " + div);      // imprime entero solo por que la var es de tipo int --entero

        float div1 = (float) i / (float) j;     // casteo convierte un entero en un flotante
        System.out.println("div1 = " + div1);

        int resto = i % j;
        System.out.println("rest0 = " + resto);
        resto = 8 % 5;
        System.out.println("rest0 = " + resto);

        Scanner scanner = new Scanner(System.in);

        System.out.println(" cual es tu edad: ");
        System.out.println("cual es tu nombre: " );
        String dato = scanner.next();
        int edad = Integer.parseInt(dato);
         System.out.println("Mi edad es: " + edad);

        String nombre = scanner.next();
        System.out.println("tu nombre es: = " + nombre);




    }
}
