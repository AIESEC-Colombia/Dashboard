import { Component, OnInit } from '@angular/core';

import {} from 'jquery';
import {} from  'select2'
import {} from 'bootstrap';
import {} from 'bootstrap-datepicker';
import {} from 'jquery.datatables';
import { AdministracionService } from '../services/administracion.service';
import { OperacionesService } from './../services/operaciones.service';

@Component({
  selector: 'app-od',
  templateUrl: './od.component.html',
  styleUrls: ['./od.component.css'],
  providers: [AdministracionService, OperacionesService]
})
export class OdComponent implements OnInit {

  lstWeeklyInicial:any[] = [];
  lstWeeklyFinal:any[] = [];
  lstPrograma:any[] = [];
  token:String = ""; 
  fechaInicio:String;
  fechaFin:String;
  lstResultado:any[] = [];

  constructor(private _administracionService: AdministracionService,
    private _operacionesService: OperacionesService) { }

  ngOnInit() {
    this.consultarSemana();
    this.consultarPrograma();
    
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

  consultarSemana(){
    this._administracionService.getWeekly()
    .subscribe(result => {
      this.lstWeeklyFinal = result;
      this.lstWeeklyInicial = result;
      $("#cmbFechaInicial").select2();
      $("#cmbFechaFinal").select2();
      console.log(result);
    },
    erro => {
      console.log(<any>erro);
    });
  }

  getSelectPrograma(){
    for(let programa of this.lstPrograma){
      if(programa.id == $("#cmbPrograma").val()){
        return programa;
      }
    }
  }

  getSelectFechaInicial(){
    for(let fechaInicial of this.lstWeeklyInicial){
      if(fechaInicial.init_date == $("#cmbFechaInicial").val()){
        return fechaInicial;
      }
    }
  }
  getSelectFechaFinal(){
    for(let fechaFinal of this.lstWeeklyFinal){
      if(fechaFinal.final_date == $("#cmbFechaFinal").val()){
        return fechaFinal;
      }
    }
  }
  btnConsultarClick(){
    let programa = this.getSelectPrograma();
    let fechaFinal = this.getSelectFechaFinal();
    let fechaInicial = this.getSelectFechaInicial();
    this._administracionService.getLcPerformance(this.getSelectFechaInicial().init_date
      , this.getSelectFechaFinal().final_date
      , programa.id).subscribe(result => {
        console.log(result);
      }, 
    error => {
      console.log(<any> error);
    });
    
    
  }
}
