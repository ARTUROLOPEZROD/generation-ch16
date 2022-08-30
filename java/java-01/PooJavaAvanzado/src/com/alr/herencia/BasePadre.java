package com.alr.herencia;

public class BasePadre {
    private int a;
    private double b;
    private String c;

    public BasePadre() {
    }
    public void visualizarA(){
        System.out.println("objeto h ->  soy un metodo de la clase BasePadre");
    }
    public void vizualizarABC(){
        System.out.println(" objeto ho -> soy el metodo visualizaABC");
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}
