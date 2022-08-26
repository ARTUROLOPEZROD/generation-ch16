package EjemplosResumen;

public class Aclaracion {
    private int atributo1;
    private int atributo2;
    private String atributo3;

    public void setAtributo1(int atributo1) {
        this.atributo1 = atributo1;
    }

    public void setAtributo2(int atributo2) {
        this.atributo2 = atributo2;
    }

    public void setAtributo3(String atributo3) {
        this.atributo3 = atributo3;
    }




    public Aclaracion(int attr1, int attr2, String attr3){
        this.atributo1 = attr1;
        this.atributo2 = attr2;
        this.atributo3 = attr3;
    }

    public Aclaracion() {
    }

    public static void main(String[] args) {
        Aclaracion ac = new Aclaracion(5, 10, "x");
        System.out.println(ac.atributo1 + ", " + ac.atributo2 + ", " + ac.atributo3);
    }
}
