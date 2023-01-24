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



}
