import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EPSAndesService } from './epsandes.service';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { FormsModule }   from '@angular/forms';
import { HttpErrorInterceptor } from './HttpErrorInterceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EpsCreateComponent } from './eps-create/eps-create.component';
import { IpsCreateComponent } from './ips-create/ips-create.component';
import { ContrataComponent } from './contrata/contrata.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCreateComponent,
    EpsCreateComponent,
    IpsCreateComponent,
    ContrataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [EPSAndesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
