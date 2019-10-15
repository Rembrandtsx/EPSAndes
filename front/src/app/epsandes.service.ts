import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EPSAndesService {

  constructor(private http: HttpClient) { }



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


}
