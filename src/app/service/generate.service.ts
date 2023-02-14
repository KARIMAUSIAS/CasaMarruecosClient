import { baseURL, httpOptions } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})


export class GenerateService {
  constructor(private http: HttpClient) { }

  generateUsuarios(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/usuario/generate/' + n, { amount: n }, httpOptions);
  }

  generateIncidencias(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/incidencia/generate/' + n, { amount: n }, httpOptions);
  }

  generateAcciones(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/accion/generate/' + n, { amount: n }, httpOptions);
  }

  generateEventos(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/evento/generate/' + n, { amount: n }, httpOptions);
  }
  generateMultimedias(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/multimedia/generate/' + n, { amount: n }, httpOptions);
  }
  generateParticipaciones(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/participacion/generate/' + n, { amount: n }, httpOptions);
  }
}
