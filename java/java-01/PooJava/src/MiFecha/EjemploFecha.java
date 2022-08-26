package MiFecha;

public class EjemploFecha {
    public static void main(String[] args) {
        fecha formF = new fecha(25,8,2022);

        formF.setAño(2022);
        formF.setMes(8);
        formF.setDia(20);
        System.out.println(formF.formaf());
    }
}
