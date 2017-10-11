export class Constantes{
    private servidorExpa:String = "https://gis-api.aiesec.org/v2/";
    private servidorMC:String = "http://127.0.0.1:8004/";

    constructor() { }

    getServicioExpa(){
        return this.servidorExpa;
    }
    getServicioMC(){
        return this.servidorMC;
    }
    
}