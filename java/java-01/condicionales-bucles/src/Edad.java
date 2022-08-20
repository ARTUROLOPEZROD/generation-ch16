import java.util.Scanner;

public class Edad {

    public static void main(String[] args) {

        // Determina si una persona es mayor de edad

        // tener la edad - pedir al usuario
        // condicional para saber si es menor de 18

        // let nombre = prompt ("Escribe tu edad")     -- pide infirmacion en js

        Scanner escaner = new Scanner(System.in);   // instanciar cerar un objeto a partir de una clase  -new-
        System.out.println("Escribe tu edad: ");
        int edad = escaner.nextInt();
        escaner.close();                  // al abrir un escaner y recibir datos cerrarlo cuando ya no se necesiten recibir mas datos y no se puede reutilizar

         //System.out.println(edad);

            // if elese normal
        if(edad >= 18){
            System.out.println("Eres mayor de edad");
        }else{
            System.out.println("Eres menor de edad");
        }

        // operador ternario   -- operador elvis

       String resultado =  (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad" ;
        System.out.println(resultado);


    }


}
