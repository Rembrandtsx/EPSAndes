import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { EpsCreateComponent } from './eps-create/eps-create.component';
import { IpsCreateComponent } from './ips-create/ips-create.component';
import { ContrataComponent } from './contrata/contrata.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
