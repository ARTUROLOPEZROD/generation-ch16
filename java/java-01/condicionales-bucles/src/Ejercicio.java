import java.util.Scanner;
 public class Ejercicio {
    public static void main(String[] args) {


            // propblema 1
        String cantasteristico = "";
        for(int i=1; i<=6 ; i++){

            cantasteristico=cantasteristico+"*";
            System.out.println(cantasteristico);
        }


            //problema 2
        String cantastericos2="*******";
        System.out.println("segundo");
        for(int j=1;j<=6;j++){
            String a=cantastericos2.substring(j);
            System.out.println(a);
        }
    }
}
