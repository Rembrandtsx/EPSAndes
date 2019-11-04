import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
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


  constructor(private epsService: EPSAndesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.epsService.getAllUsuarios().subscribe(x => {
      this.Usuarios = x;
    });
    this.epsService.getAllServiciosSalud().subscribe(x => {
      this.Servicios = x;
    })




  }

  crearServicioSalud() {
    var today: any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    if (this.cita.idOrganizador) {
      this.cita.idAfiliado = this.epsService.usuario.userName;
      console.log(this.cita);
      this.cita.fechaSolicitud = today;
      this.epsService.getCitaCamp(this.cita.idOrganizador).subscribe(
        (x: any) => {
          this.cita.id = x.ID;
          console.log("CITA ACÁ");
          
          this.epsService.putCitas(this.cita).subscribe(
            x => {
              console.log("CITA ACÁ");
            this.showSuccess("Cita de Campaña Reservada");
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
          })

        }, error=>{ console.log(error)
        })

    } else {
      this.epsService.postCitas(this.cita).subscribe(x => {

        this.showSuccess("Cita Creada");
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
    }


  }

  showSuccess(nombre) {
    this.toastr.success(nombre, 'Creado');
  }

}
