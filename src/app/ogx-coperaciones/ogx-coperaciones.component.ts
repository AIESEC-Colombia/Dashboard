import { Component, OnInit } from '@angular/core';

import {} from 'jquery';
import {} from  'select2'
import {} from 'bootstrap';
import {} from 'bootstrap-datepicker';
import { AdministracionService } from '../services/administracion.service';

@Component({
  selector: 'app-ogx-coperaciones',
  templateUrl: './ogx-coperaciones.component.html',
  styleUrls: ['./ogx-coperaciones.component.css'],
  providers: [AdministracionService]
})

export class OgxCoperacionesComponent implements OnInit {
  lstComite:any[] = [];
  lstPrograma:any[] = [];
  token:String = ""; 
  fechaInicio:String;
  fechaFin:String;
  constructor(private _administracionService: AdministracionService) { 
    
  }

  ngOnInit() {
    this.consultarComite();
    this.consultarPrograma();
  }

  consultarComite(){
    this._administracionService.getComite()
    .subscribe(resul => {
      this.lstComite = resul;
      $("#cmbComite").select2();
    },
   error =>{
     console.log(<any> error)
   });
  }

  consultarPrograma(){
    this._administracionService.getPrograma()
    .subscribe(resul => {
      this.lstPrograma = resul;
      $("#cmbPrograma").select2();
    },
   error =>{
     console.log(<any> error)
   });
  }
  getSelectPrograma(){
    for(let programa of this.lstPrograma){
      if(programa.id == $("#cmbPrograma").val()){
        return programa;
      }
    }
  }
  btnConsultarClick(){
    if (this.token == ""){
      this._administracionService.getTokenAdministrador()
      .subscribe(result => {
        this.token = result.token;
        this.consultar();
      }
    ,error => {
      console.log(<any>error);
    });
    }else{
      this.consultar();
    }

  }
  consultar(){
    let codigoComite = $("#cmbComite").val();
    let programa = this.getSelectPrograma();
  }

}
