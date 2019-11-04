import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {
  usuario={
    userName:'',
    nombre: '',
    password:'',
    tipo:''
  };
  tipos = ['recepcionista','administrador','afiliado','medico','gerente','organizadorcampaña'];
  constructor( private epsService: EPSAndesService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  crearUsuario(){
    console.log(this.usuario);
    
    this.epsService.postUsuario(this.usuario).subscribe(x=>{

      this.showSuccess(this.usuario.userName);
      this.usuario = {
        userName:'',
        nombre: '',
        password:'',
        tipo:''
      };
    });
  }

  showSuccess(userName) {
    this.toastr.success('Usuario: '+ userName, 'Creado');
  }
}
