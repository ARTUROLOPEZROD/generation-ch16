package MiSaludo;

public class EjemploSaludo {
    public static void main(String[] args) {

        Saludo objSaludo;  // definomos o declaramos el objeto
        objSaludo = new Saludo();      // creamos objeto con new definimos memoria al objetoasi llamamos los tipos de clase
        objSaludo.saludar();           // llamamos al metodo  referenciamos podemos llamar lo que contenga saludo

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("este es otro objeto: -> " + objSaludo0.saludar0());

        objSaludo.textoS = "Hola";
        System.out.println("objSaludo = " + objSaludo);

        objSaludo0.a = 4;
        System.out.println("objSaludo0 = " + objSaludo0);
    }
}
