import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-servicio-salud',
  templateUrl: './crear-servicio-salud.component.html',
  styleUrls: ['./crear-servicio-salud.component.css']
})
export class CrearServicioSaludComponent implements OnInit {
  servicioSalud={
    nombre:'',
    tipo:'',
    horaIni:'',
    horaFin:'',
    estado:'disponible'
  };

  constructor( private epsService: EPSAndesService, private toastr: ToastrService) { }

  ngOnInit() {

  }

  crearServicioSalud(){
    console.log(this.servicioSalud);
    
    this.epsService.postServicioSalud(this.servicioSalud).subscribe(x=>{

      this.showSuccess("Servicio Salud Creado");
      this.servicioSalud = {
        nombre:'',
        tipo:'',
        horaIni:'',
        horaFin:'',
        estado:'disponible'
      };
    });
  }

  showSuccess(nombre) {
    this.toastr.success(nombre, 'Creado');
  }

}
