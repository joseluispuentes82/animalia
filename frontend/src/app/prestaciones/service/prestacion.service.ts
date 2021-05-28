import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Prestacion } from '../models/prestacion';
import { PrestacionImpl } from '../models/prestacion-impl';


@Injectable({
  providedIn: 'root'
})
export class PrestacionService {

  private host: string = environment.hostAnimalia;
  private urlEndPoint: string = `${this.host}clientes/`;

  constructor(
    private http: HttpClient) { }


  getPrestaciones(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerPrestaciones(respuestaApi: any): Prestacion[] {
    const prestaciones: Prestacion[] = [];
    respuestaApi._embedded.clientes.forEach(p => {
      prestaciones.push(this.mapearPrestacion(p));

    });
    return prestaciones;
  }

  mapearPrestacion(prestacionApi: any): PrestacionImpl {
    const prestacion = new PrestacionImpl();
    prestacion.nombre = prestacionApi.nombre;
    prestacion.apellido1 = prestacionApi.apellido1;
    prestacion.apellido2 = prestacionApi.apellido2;
    prestacion.dni = prestacionApi.dni;
    prestacion.tfno = prestacionApi.tfno;
    prestacion.email = prestacionApi.email;
    prestacion.url = prestacionApi._links.self.href;
    prestacion.id = prestacion.getId(prestacion.url);

      return prestacion;
  }

  create(prestacion: Prestacion): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, prestacion).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  delete(prestacion): Observable<Prestacion> {
    return this.http.delete<Prestacion>(`${this.urlEndPoint}${prestacion.id}`)
      .pipe(
        catchError((e) => {
          if (e.status === 405) {
            console.error('El metodo está bien hecho');
          }
          return throwError(e);
        })
      );
  }

  update(prestacion: Prestacion): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint}${prestacion.id}`, prestacion)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  getPrestacion(id): Observable<any> {
    return this.http.get<Prestacion>(`${this.urlEndPoint}${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
}
