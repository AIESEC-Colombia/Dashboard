
import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http'; 
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Constantes } from './../utilidades/constantes';


@Injectable()
export class AdministracionService {
  constantes:Constantes;
  constructor(private _http: Http) { 
    this.constantes = new Constantes();
  }

  getTokenAdministrador(){
    let url:String = this.constantes.getServicioMC();
    return this._http.get(url + "administration/tokenadmin/")
                      .map(res => res.json());
  }

  getProgramaOgx(){
    let url:String = this.constantes.getServicioMC();
    return this._http.get(url + "lcperformance/product_ogx/")
                          .map(res => res.json());

  }

  getComite(){
    let url:String = this.constantes.getServicioMC();
    return this._http.get(url + "lcperformance/comite/")
                          .map(res => res.json());

  }

}
