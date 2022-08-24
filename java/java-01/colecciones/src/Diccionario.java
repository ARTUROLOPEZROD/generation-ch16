import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {
        System.out.println("Diccionario Español-Ingles");

        Map<String,String> diccionario = new HashMap<>();
        diccionario.put("door", "puerta");
        diccionario.put("body", "cuerpo");
        diccionario.put("house", "casa");
        diccionario.put("dog", "perro");
        diccionario.put("think","pensar");

        diccionario.put("see", "ver");
        diccionario.put("people", "gente");
        diccionario.put("time", "tiempo");
        diccionario.put("up","arriba");
        diccionario.put("but","pero");

        diccionario.put("all", "todo");
        diccionario.put("sister", "hermana");
        diccionario.put("dragon", "dragon");
        diccionario.put("have", "tener");
        diccionario.put("year","año");

        diccionario.put("work", "trabajo");
        diccionario.put("new", "nuevo");
        diccionario.put("clock", "reloj");
        diccionario.put("day","día");
        diccionario.put("chair","silla");
        System.out.println(diccionario);

        //Seleccionar 5

        System.out.println(diccionario);
        //No aleatorio

        System.out.println("Seleccione alguna de estas palabras para conocer si significado:");
        for(int i=1;i<=5;i++){
            Random rd = new Random();
            Object numeroAleatorio = rd.nextInt(20);
            Object palabraAleatoria=diccionario.keySet().toArray()[i];
            System.out.println(palabraAleatoria);
        }
        System.out.println("Ingrese la palabra en inglés");
        Scanner sc=new Scanner(System.in);
        String palabraBuscada = sc.nextLine();
        String palabraMeaning=diccionario.get(palabraBuscada);
        System.out.println(palabraMeaning);


        Object primero=diccionario.keySet().toArray()[1];//Se pasó a arreglo
        Object segundo=diccionario.keySet().toArray()[2];
        Object tercero=diccionario.keySet().toArray()[3];
        Object cuarto=diccionario.keySet().toArray()[4];
        Object quinto=diccionario.keySet().toArray()[5];
        System.out.println("Ingrese la palabra en inglés");

        Scanner sc=new Scanner(System.in);
        String palabraBuscada = sc.nextLine();
        String palabraMeaning = diccionario.get(palabraBuscada);
        System.out.println(palabraMeaning);

    }
}
