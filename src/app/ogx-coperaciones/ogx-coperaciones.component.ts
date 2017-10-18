
import { Component, OnInit } from '@angular/core';

import {} from 'jquery';
import {} from  'select2'
import {} from 'bootstrap';
import {} from 'bootstrap-datepicker';
import {} from 'jquery.datatables';
import {} from 'sweetalert'
import { AdministracionService } from '../services/administracion.service';
import { OperacionesService } from './../services/operaciones.service';


@Component({
  selector: 'app-ogx-coperaciones',
  templateUrl: './ogx-coperaciones.component.html',
  styleUrls: ['./ogx-coperaciones.component.css'],
  providers: [AdministracionService, OperacionesService]
})

export class OgxCoperacionesComponent implements OnInit {
  lstComite:any[] = [];
  lstPrograma:any[] = [];
  token:String = "";
  fechaInicio:String;
  fechaFin:String;
  lstResultado:any[] = [];


  constructor(private _administracionService: AdministracionService,
  private _operacionesService: OperacionesService) {

  }

  ngOnInit() {
    this.consultarComite();
    this.consultarPrograma();
    this.inicializarTablas();
  }

  inicializarTablas(){
    $(document).ready(function(){
      $("#tblPaises").DataTable({"paging":false, "searching": false});
      $("#tblComites").DataTable({"paging":false, "searching": false});
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

    $("#tblPaises").DataTable().clear().draw();
    $("#tblComites").DataTable().clear().draw();
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
    if (this.validar()){
      $(".preload").css({"display":"flex"}).show("slow");
      let codigoComite = $("#cmbComite").val();
      let programa = this.getSelectPrograma();
      console.log(codigoComite);
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
            $(".preload").hide("slow");
            this.generarTablas();
          }
        },
        error =>{
          console.log(<any> error);
        }
      );
    }
  }

  generarTablas(){
      let lstPais = {};
      let lstComite = {};
      for (let oportunidad of this.lstResultado){
        let office = oportunidad["opportunity"]["office"];
        if(lstPais[office["country"]] != undefined){
          lstPais[office["country"]] += 1;
        }else{
          lstPais[office["country"]] = 1;
        }
        if(lstComite[office["name"]] != undefined){
          lstComite[office["name"]] += 1;
        }else{
          lstComite[office["name"]] = 1;
        }
      }

      $.each(lstPais,(index, value )=>{
        $("#tblPaises").DataTable().row.add([index, value]).draw();

      } );

      $.each(lstComite, (index, value) => {
        $("#tblComites").DataTable().row.add([index, value]).draw();
      });

  }

  validar(){
   
    if($("#cmbComite").val() == "Seleccione un Comite"){
      swal("Alerta", "Seleccione una un comite", "warning");
      return false;
    }else if($("#cmbPrograma").val() == "Seleccione un Programa"){
      swal("Alerta", "Seleccione una un programa", "warning");
      return false;
    }else if (this.fechaInicio == undefined || this.fechaInicio == null){
      swal("Alerta", "Seleccione una fecha de inicio", "warning");
      return false;
    }else if(this.fechaFin == undefined || this.fechaFin == null) {
      swal("Alerta", "Seleccione una fecha de final", "warning");
      return false
    }else{
      return true;
    }
  }
}
