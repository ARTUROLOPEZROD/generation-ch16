package MiSaludo;

public class Saludo {
     String textoS = "Hola Mundo Java OOP";
    int a =  3;
    public void saludar(){
        System.out.println("Hola Java OOP");    // void no retorna nada le interesa lo que regresa - retorno generico
    }
     public String saludar0(){      // string metodo que regresa  --return--

        return textoS;
    }
}
