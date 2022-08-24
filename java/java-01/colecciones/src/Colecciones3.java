import java.lang.reflect.Array;
import java.util.*;

public class Colecciones3 {
    public static void main(String[] args) {
        //int - Integer
        //char - Character
        //float - Float
        //double - Double

        System.out.println("ArrayList");
        List<String> comidas = new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add("Esquites");
        comidas.add(2, "Carnitas");

        System.out.println(comidas);

        //otra forma de inicializar una lista
        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1, 2, 3, 4, 54, 345));
        System.out.println(numeros);

        System.out.println("-----------");
        System.out.println("HashSet");

        Set<String> ciudades = new HashSet<String>();
        ciudades.add("CDMX");
        ciudades.add("GDL");
        ciudades.add("MTY");
        ciudades.add("EDOMEX");

        System.out.println(ciudades);


        // otra forma de crear un HashSet
        Set<Boolean> verdad = new HashSet<Boolean>(Arrays.asList(true, false, false, true));
        System.out.println(verdad);


        System.out.println("----------------");
        System.out.println("HashMap");

        // nos permiten guardar pares de valores
        // llave : valor
        //HashMap<llave, valor>

        Map<Integer, String> alumnos = new HashMap<Integer, String>();  // permite agregar pares de valores hashmap
        alumnos.put(2, "Sofia");
        alumnos.put(3, "Salma");
        alumnos.put(4, "Miguel");
        alumnos.put(5, "Saúl");
        alumnos.put(0, "Luis");

        System.out.println(alumnos);
        System.out.println(alumnos.size());        // numeero de elementos del arreglo
        System.out.println(alumnos.values());    //lista de valores
        System.out.println(alumnos.keySet());     //lista de valores
        System.out.println(alumnos.get(2));       // muestra el valor especificado


      // Object llaves = alumnos.keySet().toArray()[1]; // object-tipo de dato generico / ayuda para pedir el dato sin saber que tipo de dato es
        //System.out.println(alumnos.get(llaves));


        for (int i = 0; i < alumnos.size(); i++) {
            Object llaves = alumnos.keySet().toArray()[1];
            System.out.println(alumnos.get(llaves));
        }
        for (Integer llave : alumnos.keySet()) {
            System.out.println(llave + " - " + alumnos.get(llave));
        }
    }
}
