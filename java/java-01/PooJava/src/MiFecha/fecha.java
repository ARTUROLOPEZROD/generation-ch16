package MiFecha;

public class fecha{
    private int dia;
    private int mes;
    private int año;

    public fecha(int dia, int mes, int año) {
        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }

    public void setDia (int dia){
            this.dia = dia;
        }

        public void setMes ( int mes){
            this.mes = mes;
        }

        public void setAño ( int año){
            this.año = año;
        }

        public int getDia () {
            return dia;
        }

        public int getMes () {
            return mes;
        }

        public int getAño () {
            return año;
        }
        public String formaf(){
        return ""+getDia() +"/" + getMes() + "/" + getAño();
        }

    }

