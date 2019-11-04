import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-servicio-salud',
  templateUrl: './update-servicio-salud.component.html',
  styleUrls: ['./update-servicio-salud.component.css']
})
export class UpdateServicioSaludComponent implements OnInit {

  servicioModificado = {
    nombre:'',
    tipo:'',
    horaIni:'',
    horaFin:'',
    estado:''
  };
  servicios = [];
  estados = ['mantenimiento', 'disponible'];
  idServicio='';
  estado='';
  constructor( private epsService: EPSAndesService, private toastr: ToastrService) { }

  ngOnInit() {

    this.epsService.getAllServiciosSalud().subscribe(servicios=>{
      this.servicios = servicios
      console.log(this.servicios);
    })
  }

  crearServicioOfrecido(){
    let servicioFinal = this.servicios.find(x => x.ID == this.idServicio)
    let finale = {
      estado: ''
    };
    console.log(this.idServicio);
    
    Object.keys(servicioFinal).forEach(x=>{
      finale[x.toLowerCase()] = servicioFinal[x];
    })  
     finale.estado = this.estado
    console.log(finale);
    
    this.epsService.putServiciosSalud(finale).subscribe(x=>{

      this.showSuccess("Servicio puesto en:" + this.estado );
      this.servicioModificado = {
        nombre:'',
        tipo:'',
        horaIni:'',
        horaFin:'',
        estado:''
      };
      this.estado = '';
      this.idServicio = '';
    });
  }

  showSuccess(nombre) {
    this.toastr.success(nombre, 'Estado Actualizado');
  }

}
