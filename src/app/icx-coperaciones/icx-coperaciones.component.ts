import { Component, OnInit } from '@angular/core';
import { AdministracionService } from '../services/administracion.service';

@Component({
  selector: 'app-icx-coperaciones',
  templateUrl: './icx-coperaciones.component.html',
  styleUrls: ['./icx-coperaciones.component.css'],
  providers: [AdministracionService]
})
export class IcxCoperacionesComponent implements OnInit {
  public token:String;
  constructor(private _administracionService: AdministracionService) { }

  ngOnInit() {
    this.consultarComite();
    this.consultarPrograma();
  }
     

  consultarToken(){
    this._administracionService.getTokenAdministrador()
    .subscribe(result => {
      if(result.resultado){
        this.token = result.token
      }
     console.log(result);
    },
   error => {
     var e = <any> error
     console.log(e);
   });
 }

 consultarComite(){
   this._administracionService.getComite()
   .subscribe(resul => {
    console.log(resul);
   },
  error =>{
    console.log(<any> error)
  });
 }

 consultarPrograma(){
   this._administracionService.getPrograma()
   .subscribe(resul => {
    console.log(resul);
   },
  error =>{
    console.log(<any> error)
  });
 }

}
