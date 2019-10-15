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
    horaInicio:'',
    horaFin:'',
    capacidad:'',
  };
  ipss = [];
  servicios = [];
  horarios = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
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
        horaInicio:'',
        horaFin:'',
        capacidad:'',
      };
    });
  }

  showSuccess(nombre) {
    this.toastr.success(nombre, 'Creado');
  }
}
