public class EjemploString {
    public static void main(String[] args) {
        String curso = "curso de java";
        System.out.println("curso = " + curso);
        String nombre = "Arturo López";

        //String nuevo;
        //nuevo = new String();
        //nuevo.concat();

        String resultado = new String ("curso en java");
        System.out.println("resultado =" + resultado);

        Boolean esigual = curso == resultado;
        System.out.println("esigual = " + esigual);

        esigual = curso.equalsIgnoreCase(resultado);
        System.out.println("esigual = " + esigual );


        String concat = curso +" con "+ nombre;
        System.out.println("concat = " + concat);
        String dia = "Jueves";
        String concat1 = concat.concat(" ").concat(dia);

        System.out.println("concat1 = " + concat1);
        String valor = "hola";
        System.out.println(valor.concat("23"));

    }
}
