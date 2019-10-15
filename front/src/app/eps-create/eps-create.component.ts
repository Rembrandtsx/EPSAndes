import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eps-create',
  templateUrl: './eps-create.component.html',
  styleUrls: ['./eps-create.component.css']
})
export class EpsCreateComponent implements OnInit {
  eps={
    nombre: '',
    localizacion:'',
    idGerente:''
  };
  usuarios = [];
  constructor( private epsService: EPSAndesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.epsService.getAllUsuarios().subscribe(usuarios=>{
      this.usuarios = usuarios.map(usuario=>{
          return usuario.USERNAME;
      })
      console.log(this.usuarios);
    })
    
  }

  crearEPS(){
    console.log(this.eps);
    
    this.epsService.postEPS(this.eps).subscribe(x=>{

      this.showSuccess(this.eps.nombre);
      this.eps = {
        nombre: '',
        localizacion:'',
        idGerente:''
      };
    });
  }

  showSuccess(nombre) {
    this.toastr.success('EPS: '+ nombre, 'Creado');
  }
}
