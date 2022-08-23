public class Arreglos {
    public static void main(String[] args) {

        // Arreglos
        // No de pueden mezclar tipos de datos

        int[] numerosAleatorios = {1,2,3,4,5,6};

        String[] valores = {"Hola", "Adios", "etc"};

        //byte otrosNumeros[] = {1,2,3}; es otra forma de definir un arreglo casi no se utiliza

        //los arreglos tienen un tamaño definido y no se pude agregar mas elementos
        char[] caracteres = new char[4];               //el 4 indica la cantidad de elementos
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'a';

        valores[2] = "valor cambiado";

        System.out.println(valores[2]);           //.length  para ver cuantos elemenetos tiene el arreglo
        System.out.println(numerosAleatorios[0]);   // se debe especificar el valor de arreglo a imprimir
        System.out.println(caracteres);             // no imprime el arreglo completo como js


        // for Each                           recorre la cantidad de elementos del arreglo no se pasa
            for(String elemento : valores){
                System.out.println(elemento);
            }
            for (int numero : numerosAleatorios){
                System.out.println(numero);
            }


    }
}
