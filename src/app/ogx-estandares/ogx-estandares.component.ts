import { Component, OnInit } from '@angular/core';

import {} from 'jquery';
import {} from  'select2'
import {} from 'bootstrap';
import {} from 'bootstrap-datepicker';
import {} from 'jquery.datatables';
import { AdministracionService } from '../services/administracion.service';
import { OperacionesService } from './../services/operaciones.service';

@Component({
  selector: 'app-ogx-estandares',
  templateUrl: './ogx-estandares.component.html',
  styleUrls: ['./ogx-estandares.component.css'],
  providers: [AdministracionService, OperacionesService]
})
export class OgxEstandaresComponent implements OnInit {
  lstComite:any[] = [];
  lstPrograma:any[] = [];
  token:String = ""; 
  fechaInicio:String;
  fechaFin:String;
  lstResultado:any[] = [];
  constructor(private _administracionService: AdministracionService,
    private _operacionesService: OperacionesService) { }

  ngOnInit() {
    this.consultarComite();
    this.consultarPrograma();
    this.inicializarTablas();
  }
  inicializarTablas(){
    $(document).ready(function(){
      $("#tblEstandares").DataTable({"paging":false, "searching": false});
    });
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
    this._administracionService.getProgramaOgx()
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
    $("#tblEstandares").DataTable().clear().draw();
    this.lstResultado = [];
    if (this.token == ""){
      this._administracionService.getTokenAdministrador()
      .subscribe(result => {
        this.token = result.token;
        this.consultar(1);
      }
    ,error => {
      console.log(<any>error);
    });
    }else{
      this.consultar(1);
    }

  }
  consultar(pagina:number){
    let codigoComite = $("#cmbComite").val();
    let programa = this.getSelectPrograma();
    this._operacionesService.getConsultaRealize(this.token,
       this.fechaInicio,
        this.fechaFin,
         <String>programa.code_expa
        ,<String>codigoComite
      ,pagina.toString())
    .subscribe(
      result => {
        var data = result["data"];
        var page = parseInt(result["paging"]["current_page"]);
        for(let resultado of data){
          this.lstResultado.push(resultado);
        }
       
        if (data.length >= 100){
          ++page;
          this.consultar(page);
        }else{
          this.generarTablas();
        }
      },
      error =>{
        console.log(<any> error);
      }
    );
  }
  
  generarTablas(){
    let lstStandar = {};
    for (let oportunidad of this.lstResultado){
      let lstStandarExpa = oportunidad["standards"];
      for (let standar of lstStandarExpa){
        if (lstStandar[standar["position"]] == undefined){
          lstStandar[standar["position"]] = {'nombre': standar["name"]
                                            , 'si': 0
                                            , 'no': 0
                                            , 'no_responde': 0}
        }else{
          if(standar["option"] == null){
            lstStandar[standar["position"]]["no_responde"] += 1;
          }else if(standar["option"] == "true"){
            lstStandar[standar["position"]]["si"] +=1;
          }else{
            lstStandar[standar["position"]]["no"] +=1;
          }
        }
      }
    }
    $.each(lstStandar,(index, value )=>{
      $("#tblEstandares").DataTable().row.add([index, value.nombre, value.si, value.no, value.no_responde]).draw();

    });
  }

}
