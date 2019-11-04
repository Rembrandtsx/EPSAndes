import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { EpsCreateComponent } from './eps-create/eps-create.component';
import { IpsCreateComponent } from './ips-create/ips-create.component';
import { ContrataComponent } from './contrata/contrata.component';
import { CrearServicioOfrecidoComponent } from './crear-servicio-ofrecido/crear-servicio-ofrecido.component';
import { CrearServicioSaludComponent } from './crear-servicio-salud/crear-servicio-salud.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { CrearCitasCampaniaComponent } from './crear-citas-campania/crear-citas-campania.component';
import { UpdateServicioSaludComponent } from './update-servicio-salud/update-servicio-salud.component';

const routes: Routes = [
  {
    path:'crearUsuario',
    component: UsuarioCreateComponent,
    pathMatch:'full'
  },
  {
    path:'crearEPS',
    component: EpsCreateComponent,
    pathMatch:'full'
  },
  {
    path:'crearIPS',
    component: IpsCreateComponent,
    pathMatch:'full'
  },
  {
    path:'crearContrata',
    component: ContrataComponent,
    pathMatch:'full'
  },
  {
    path:'crearServicioPorIps',
    component: CrearServicioOfrecidoComponent,
    pathMatch:'full'
  },
  {
    path:'crearServicio',
    component: CrearServicioSaludComponent,
    pathMatch:'full'
  },
  {
    path:'reservarCita',
    component: CrearCitaComponent,
    pathMatch:'full'
  },
  {
    path:'reservarCitaCamp',
    component: CrearCitasCampaniaComponent,
    pathMatch:'full'
  },
  {
    path:'registrarMantenimiento',
    component: UpdateServicioSaludComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
