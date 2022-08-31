package com.alr.h_abstracta;

public abstract class FigurasGeometricas {
    private String nombre;

    public abstract float area();                                    //metodo abstracto es un metodo vacio

    public FigurasGeometricas(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return nombre + " area -> "+ area();
    }

}
