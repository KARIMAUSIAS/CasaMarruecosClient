
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/generic-types-interface';
import { IIncidencia, IIncidencia2Send } from '../model/incidencia-interface';


@Injectable({
  providedIn: 'root'
})

export class IncidenciaService {

  private entityURL = '/incidencia';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getIncidenciasPlist(page: number, size: number, termino: string, id_usuario: number, strSortField: string, strOrderDirection: string): Observable<IPage<IIncidencia>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_usuario != 0) {
      params = params.set("usuario", id_usuario);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IIncidencia>>(this.url, {withCredentials:true, params: params });
  }

  getOne(id: number): Observable<IIncidencia> {
    return this.oHttp.get<IIncidencia>(this.url + "/" + id,{withCredentials:true});
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id,{withCredentials:true});
  }

  updateOne(oIncidencia2Send: IIncidencia2Send): Observable<number> {
    return this.oHttp.put<number>(this.url + "/", oIncidencia2Send,{withCredentials:true});
  }


  newOne(oIncidencia2Send: IIncidencia2Send): Observable<number> {
    return this.oHttp.post<number>(this.url + "/", oIncidencia2Send,{withCredentials:true});
  }
  getCountIncidencias(): Observable<number> {
    return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
  }

}
