public class Saludo {
    private String textoS = "Hola Mundo Java OOP";
    void saludar(){
        System.out.println("Hola Java OOP");    // void no retorna nada le interesa lo que regresa - retorno generico
    }
    String saludar0(){      // string metodo que regresa  --return--
        return textoS;
    }
}
