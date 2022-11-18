import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from './Libro'
import { Inscripcion } from './Inscripcion';
import { Loginest } from './Loginest';
import { Loginprof } from './LoginProf';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost:8080/Libros/';

  constructor(private clientHttp:HttpClient) { }

  AgregarLibros(datosLibros:Libro):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",datosLibros);
  }

  ObtenerLibros(){
    return this.clientHttp.get(this.API);
  }

  BorrarLibros(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id);
  }

  ObtenerLibro(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id);
  }

  EditarLibro(id:any,datosLibros:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar="+id,datosLibros);
  }

  AgregarInscripcion(datosIncripcion:Inscripcion):Observable<any>{
    return this.clientHttp.post(this.API+"?inscripcion=1",datosIncripcion);
  }

  IniciarSesion(datosIncripcion:Loginest):Observable<any>{
    return this.clientHttp.post(this.API+"?loginest=1",datosIncripcion);
  }

  Reservar(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?reservar="+id,id);
  }

  InicioSesion(datosIncripcion:Loginprof):Observable<any>{
    return this.clientHttp.post(this.API+"?loginprof=1",datosIncripcion);
  }
}
