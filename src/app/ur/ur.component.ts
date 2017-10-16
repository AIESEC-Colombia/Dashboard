import { Component, OnInit } from '@angular/core';
import {} from 'jquery';
import {} from  'select2'
import {} from 'bootstrap';
import {} from 'bootstrap-datepicker';
import {} from 'jquery.datatables';
import { AdministracionService } from '../services/administracion.service';
@Component({
  selector: 'app-ur',
  templateUrl: './ur.component.html',
  styleUrls: ['./ur.component.css'],
  providers: [AdministracionService]
})
export class UrComponent implements OnInit {
  lstComite:any[] = [];
  lstPrograma:any[] = [];
  token:String = ""; 
  fechaInicio:String;
  fechaFin:String;
  lstResultado:any[] = [];
  constructor(private _administracionService: AdministracionService) { }

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
    if (this.validar()){
      let programa = this.getSelectPrograma();
      console.log(programa);
      let servicio = "open_ogv";
      switch(programa.id){
        case 4:
          servicio = "open_ogv";
        break;
        case 5:
          servicio = "open_oge";
        break;
        case 6:
          servicio = "open_ogt";
        break;
      }
      this.lstResultado = [];
      
      let codigoComite = $("#cmbComite").val();
  
      this._administracionService.getInfoPodio(servicio
      ,this.fechaInicio
      ,this.fechaFin
      ,<String>codigoComite).subscribe(
        result => {
  
        console.log(result)
        
      },
      error => {
        console.log(<any>error);
      });
  
    }
    
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
       return false
     }else{
       return true;
     }
   }


}
