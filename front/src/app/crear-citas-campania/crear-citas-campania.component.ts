import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';
import { ToastrService } from 'ngx-toastr';
import { merge } from 'rxjs';

@Component({
  selector: 'app-crear-citas-campania',
  templateUrl: './crear-citas-campania.component.html',
  styleUrls: ['./crear-citas-campania.component.css']
})
export class CrearCitasCampaniaComponent implements OnInit {

  cita = {
    idAfiliado: '',
    fechaSolicitud: '',
    fecha: '',
    id: '',
    ingreso: 0,
    idMedico: '',
    idServicio: '',
    horaIni: '',
    horaFin: '',
    idOrganizador: ''
  };
  Usuarios = [];
  Servicios = [];

  cantidadCitasACrear


  constructor(private epsService: EPSAndesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.epsService.getAllUsuarios().subscribe(x => {
      this.Usuarios = x;
    });
    this.epsService.getAllServiciosSalud().subscribe(x => {
      this.Servicios = x;
    })




  }

  async crearServicioSalud() {
    var today: any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    this.cita.fechaSolicitud = today;
    this.cita.fecha = today;
    this.cita.idAfiliado = this.epsService.usuario.userName;
    this.cita.idOrganizador = this.epsService.usuario.userName;


    let arrayObservers =[];
    for(let i = 0; i<this.cantidadCitasACrear; i++){
      arrayObservers.push(this.epsService.postCitas(this.cita));
    }

     arrayObservers.forEach(obs=>{
       obs.subscribe(x=>{
         this.showSuccess("Citas Regitradas")

       this.cita = {
         idAfiliado: '',
         fechaSolicitud: '',
         fecha: '',
         id: '',
         ingreso: 0,
         idMedico: '',
         idServicio: '',
         horaIni: '',
         horaFin: '',
         idOrganizador: ''
       };
     });
     })

        
    }


  showSuccess(nombre) {
    this.toastr.success(nombre, 'Creado');
  }


}
