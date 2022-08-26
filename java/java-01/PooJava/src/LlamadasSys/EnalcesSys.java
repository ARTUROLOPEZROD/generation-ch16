package LlamadasSys;

import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EnalcesSys {



        public void enlazar(){
            Scanner sc = new Scanner(System.in);
            MenuOp menuOp = new MenuOp();
            int op;


            do {
                menuOp.menu();
                System.out.print("Elija una opción -> ");
                op = sc.nextInt();

                switch (op) {
                    case 1:
                        Saludo s = new Saludo();
                        s.saludar0();
                        System.out.println(s.saludar0());
                        s.saludar();
                        break;
                    case 2:
                        Persona p = new Persona();
                        p.setNombre("Dora");
                        p.setEdad(32);
                        p.setNss(14689);
                        System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNombre());
                        System.out.println("el valor de la variable de instancia p.edad -> " + p.getEdad());
                        System.out.println("el valor de la variable de instancia p.nss -> " + p.getNss());
                        break;
                    case 3:
                        fecha f = new fecha(25, 8, 2022);
                        f.setDia(20);
                        f.setMes(8);
                        f.setAño(2022);
                        System.out.println(f.formaf());
                        break;
                    case 4:
                        System.out.println("aqui va la activida del dia");
                        break;
                    default:
                        System.out.println("opcion no valida");
                }
            }while (op != 5);
        }

    }


