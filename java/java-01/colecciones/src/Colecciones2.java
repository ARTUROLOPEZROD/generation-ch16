import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {
        // SET
        //HashSet

        // no guardan los valores en el orden en que se van agregando
        // SET no permite elementos duplicados
        //La colleccion que funaciona mas rapido

        Set<String> miSet = new HashSet<>();

        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");

        boolean persona = miSet.remove("Felipe");   // para .remove aqui se especifica el valor del elemento

        System.out.println(miSet);
        System.out.println(miSet.size());           // size cantidad de elementos
        System.out.println(miSet.contains("Juan"));   // pregunta si el objeto existe dentro de la lista

        for (String nombre : miSet){
            System.out.println(nombre);
        }

    }
}
