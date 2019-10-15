import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ips-create',
  templateUrl: './ips-create.component.html',
  styleUrls: ['./ips-create.component.css']
})
export class IpsCreateComponent implements OnInit {
  usuario={
    userName:'',
    nombre: '',
    password:'',
    tipo:''
  };
  tipos = ['recepcionista','administrador','afiliado','medico','gerente'];
  constructor( private epsService: EPSAndesService, private toastr: ToastrService) { }
  ips={
    nombre: '',
    localizacion:''
  };

  ngOnInit() {
  }

  crearIPS(){
    console.log(this.ips);
    
    this.epsService.postIPS(this.ips).subscribe(x=>{

      this.showSuccess(this.ips.nombre);
      this.ips= {
        nombre: '',
        localizacion:''
      };

    });
  }

  showSuccess(userName) {
    this.toastr.success('IPS: '+ userName, 'Creado');
  }

}
