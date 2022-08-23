import java.util.ArrayList;
import java.util.List;
public class Colecciones {

    public static void main(String[] args){
        // list -- ArrayList
        // -los valores se ordenan segun el orden en que los agreguemos
        // -permiten tener valores duplicados
        //-es una collecion de objetos de un mismo tipo

        List<String> meses = new ArrayList<String>();

        meses.add("Enero");
        meses.add("Febrero");
        meses.add("Marzo");
        meses.add(1, "Abril");  // agrtega elemento en la posicion definida

        String mes = meses.remove(3);     // remueve el lemento en la posicion definida  -- al ponerlo en una varible regresa el valor removido

        System.out.println(meses);
        System.out.println(mes);
        System.out.println(meses.get(0));      // metodo get regresa la posicion del elemento
        System.out.println(meses.size());        // size regresa la coantidad de elementos de la lista


        for(String elemento : meses){
            System.out.println(elemento);         // for each recorre los elementos del arreglo
        }


        // clases envolventes o wrapper
        int num1 = 10;        // int es un numero primotovo y no tiene metodos asociados
        Integer num2 = 10;    // integer lo convierte en metodo envolvente de int y le da acceso a metodos

        System.out.println(num1 + 10);
        System.out.println(num2 - 5);
        System.out.println(num2.getClass().getSimpleName());   // debuelve el tipo de dato que es la variable

        List<Integer> numeros = new ArrayList<Integer>();
        numeros.add(2);
        numeros.add(500);
        numeros.add(98);
        numeros.add(90);

        System.out.println(numeros);



    }
}
