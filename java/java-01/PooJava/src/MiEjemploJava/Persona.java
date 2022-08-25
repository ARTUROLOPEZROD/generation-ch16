package MiEjemploJava;

public class Persona {
     private String nombre = "Arturo López";

     private int edad = 29;

     private int nss = 1234567890;


    public Persona(String nombre, int edad, int nss) {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }

    void caminar(){
         System.out.println("caminar");
     }
     void dormir(){
         System.out.println("dormir");
     }
}
