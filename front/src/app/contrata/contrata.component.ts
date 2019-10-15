import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contrata',
  templateUrl: './contrata.component.html',
  styleUrls: ['./contrata.component.css']
})
export class ContrataComponent implements OnInit {
  contrata={
    idEPS: '',
    idIPS:''
  };
  ipss = [];
  epss = [];
  constructor( private epsService: EPSAndesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.epsService.getAllIps().subscribe(ips=>{
      this.ipss = ips
      console.log(this.ipss);
    })
    this.epsService.getAllEps().subscribe(eps=>{
      this.epss = eps
      console.log(this.epss);
    })
  }

  crearContrata(){
    console.log(this.contrata);
    
    this.epsService.postContrata(this.contrata).subscribe(x=>{

      this.showSuccess("Contrato Creado");
      this.contrata = {
        idEPS: '',
        idIPS:''
      };
    });
  }

  showSuccess(nombre) {
    this.toastr.success(nombre, 'Creado');
  }
}
