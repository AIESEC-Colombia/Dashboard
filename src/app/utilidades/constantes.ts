export class Constantes{
    private servidorExpa:String = "https://gis-api.aiesec.org/v2/";
    private servidorMC:String = "http://138.197.119.196/";

    constructor() { }

    getServicioExpa(){
        return this.servidorExpa;
    }
    getServicioMC(){
        return this.servidorMC;
    }
    
}