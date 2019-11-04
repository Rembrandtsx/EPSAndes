import { Component, OnInit } from '@angular/core';
import { EPSAndesService } from '../epsandes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public epsAndesService: EPSAndesService) { }
  username="";
  password=""
  ngOnInit() {
  }
  login(){
    this.epsAndesService.login(this.username,this.password).subscribe(user=>{
      console.log(user[0] + "  =   "+this.username + " = " + this.password);
      
      if(user[0].USERNAME.toUpperCase() == this.username.toUpperCase() && user[0].PASSWORD.toUpperCase() == this.password.toUpperCase()){
        this.epsAndesService.usuario.tipo = user[0].TIPO.toLowerCase();
        this.epsAndesService.usuario.userName = user[0].USERNAME;
        this.epsAndesService.usuario.nombre = user[0].NOMBRE;
        console.log("Cambiado");
        console.log(this.epsAndesService.usuario)
        
      }
    })
  }
}
