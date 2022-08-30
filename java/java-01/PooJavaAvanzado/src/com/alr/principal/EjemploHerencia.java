package com.alr.principal;

import com.alr.herencia.BasePadre;
import com.alr.herencia.Hija;
import com.alr.herencia.Hijo;

import java.util.ArrayList;

public class EjemploHerencia {
    public static void main(String[] args) {
        Hija h = new Hija();
        h.visualizarA();
        Hijo ho = new Hijo();
        ho.setA(14689);
        ho.vizualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2357);

        Object miObj = new BasePadre();



        System.out.println("Atributo de clase base padre ->"+ objB.getA());
        System.out.println("Attributo de Clase Hijo -> "+ ho.getA());
    }
}
