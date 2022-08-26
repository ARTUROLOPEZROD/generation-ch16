package EjemplosResumen;

public class Animales {
    private String raza;
    private String nombre;
    private int edad;

    public Animales(String nuevoNombre){
        nombre = nuevoNombre;
    }
    public int getEdad(){
        return edad;
    }
    public void setEdad(int nuevaEdad){
        edad = nuevaEdad;
    }
    public String getNombre(){
        return nombre;
    }
}
