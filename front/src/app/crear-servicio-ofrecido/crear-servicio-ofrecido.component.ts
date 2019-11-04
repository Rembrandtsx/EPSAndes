import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-servicio-ofrecido',
  templateUrl: './crear-servicio-ofrecido.component.html',
  styleUrls: ['./crear-servicio-ofrecido.component.css']
})
export class CrearServicioOfrecidoComponent implements OnInit {
  servicioOfrecido={
    idIPS:'',
    idServicio:'',
    capacidad:'',
  };
  ipss = [];
  servicios = [];
  constructor( private epsService: EPSAndesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.epsService.getAllIps().subscribe(ips=>{
      this.ipss = ips
      console.log(this.ipss);
    })
    this.epsService.getAllServiciosSalud().subscribe(servicios=>{
      this.servicios = servicios
      console.log(this.servicios);
    })
  }

  crearServicioOfrecido(){
    console.log(this.servicioOfrecido);
    
    this.epsService.postServiciosOfrecidos(this.servicioOfrecido).subscribe(x=>{

      this.showSuccess("Servicio Ofrecido Creado");
      this.servicioOfrecido = {
        idIPS:'',
        idServicio:'',
        capacidad:'',
      };
    });
  }

  showSuccess(nombre) {
    this.toastr.success(nombre, 'Creado');
  }
}
