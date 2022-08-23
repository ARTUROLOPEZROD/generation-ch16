
import java.util.Objects;
import java.util.Scanner; // import java.util.*; Importar todas las clases del paquete util

public class Bucles {

    public static void main(String[] args) {
                // let i=1
                // bucle controlado
        for(int i=5; i<10; i++){
            System.out.println(i);
        }

        // while
        // bucle no controlado
        // la condicion se debe de modificar dentro de while

        // mientas la condicion sea true

        String condicion = "Hola";
        Scanner sc = new Scanner(System.in);
        condicion.equals("Hola");

        // ==, != estamos comparando datos primitivos string en java ya es un objeto
        // la condicion se debe de modificar dentro del while
        while(!Objects.equals(condicion,"Hola")){

            System.out.println("Saludame");
             condicion = sc.next();

        }


        // el Do while es igual al while
        // del Do while ejecuta la accion aun que sea una vez
        do {
            System.out.println("Saludame x2");
            condicion = sc.next();

        }while (!Objects.equals(condicion,"Hola"));
    }
}
