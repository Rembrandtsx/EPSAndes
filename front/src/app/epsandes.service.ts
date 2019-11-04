import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EPSAndesService {

  public usuario= {
    tipo :"visitante",
    userName:"",
    nombre:"",
    urlImage:"https://i.pravatar.cc/300"
  }

  constructor(private http: HttpClient) {

   }


  login(userName:string,password:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/usuario/'+userName);
  }
  //EPS
  getAllEps():Observable<any>{
    return this.http.get('http://localhost:3000/api/eps');
  }

  getEps(id:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/eps/'+ id);
  }
  postEPS(eps:any){
    return this.http.post('http://localhost:3000/api/eps', eps);
  }
  //IPS
  getAllIps():Observable<any>{
    return this.http.get('http://localhost:3000/api/ips');
  }

  getIps(id:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/ips/'+ id);
  }
  postIPS(ips:any){
    return this.http.post('http://localhost:3000/api/ips', ips);
  }
  //Contrata
  getAllContrata():Observable<any>{
    return this.http.get('http://localhost:3000/api/contrata');
  }

  postContrata(contrata:any){
    return this.http.post('http://localhost:3000/api/contrata', contrata);
  }

  //Usuario
  getAllUsuarios():Observable<any>{
    return this.http.get('http://localhost:3000/api/Usuario');
  }
  getUsuario(userName:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/Usuario/'+ userName);
  }
  postUsuario(usuario:any){
    return this.http.post('http://localhost:3000/api/Usuario', usuario);
  }

  //ServiciosSalud
  getAllServiciosSalud():Observable<any>{
    return this.http.get('http://localhost:3000/api/ServicioSalud');
  }
  getServicioSalud(userName:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/ServicioSalud/'+ userName);
  }
  postServicioSalud(usuario:any){
    return this.http.post('http://localhost:3000/api/ServicioSalud', usuario);
  }
  putServiciosSalud(servicio:any){
    return this.http.put('http://localhost:3000/api/ServicioSalud/'+servicio.id, servicio)
  }


  //ServiciosOfrecidos
  getAllServiciosOfrecidos():Observable<any>{
    return this.http.get('http://localhost:3000/api/ServiciosOfrecidos');
  }
  getServicioOfrecido(userName:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/ServiciosOfrecidos/'+ userName);
  }
  postServiciosOfrecidos(usuario:any){
    return this.http.post('http://localhost:3000/api/ServiciosOfrecidos', usuario);
  }

    //Cita
    getAllCitas():Observable<any>{
      return this.http.get('http://localhost:3000/api/Cita');
    }
    getCita(userName:string):Observable<any>{
      return this.http.get('http://localhost:3000/api/Cita/'+ userName);
    }
    postCitas(usuario:any){
      return this.http.post('http://localhost:3000/api/Cita', usuario);
    }
    putCitas(cita:any):Observable<any>{
      return this.http.put('http://localhost:3000/api/Cita/'+cita.id, cita);
    }

    getCitaCamp(idOrganizador:any){
      return this.http.get('http://localhost:3000/api/utils/getCitaCamp/'+ idOrganizador);
    }
}
