package EjemplosResumen;


public class Ejemplo {

    public static void main(String[] args) {
        Animales miAnimales = new Animales("falco");
        miAnimales.setEdad(3);
        System.out.println("El nombre es: " + miAnimales.getNombre());
        System.out.println("y tiene " + miAnimales.getEdad() + " años");
    }
}
