import { IAccion, IAccion2Send } from './../model/accion-interface';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IPage } from '../model/generic-types-interface';

@Injectable({
    providedIn: 'root'
  })

  export class AccionService {

    private entityURL = '/accion';
    url: string = ""

    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }

    getAccionsPlist(page: number, size: number, termino: string, id_incidencia: number, strSortField: string, strOrderDirection: string): Observable<IPage<IAccion>> {
      let params = new HttpParams()
        .set("filter", termino)
        .set("page", page)
        .set("size", size);
      if (id_incidencia != 0) {
        params = params.set("incidencia", id_incidencia);
      }
      if (strSortField != "") { //&sort=codigo,[asc|desc]
        if (strOrderDirection != "") {
          params = params.set("sort", strSortField + "," + strOrderDirection);
        } else {
          params = params.set("sort", strSortField);
        }
      }
      return this.oHttp.get<IPage<IAccion>>(this.url, {withCredentials:true, params: params });
    }

    getOne(id: number): Observable<IAccion> {
      return this.oHttp.get<IAccion>(this.url + "/" + id,{withCredentials:true});
    }

    removeOne(id: number): Observable<number> {
      return this.oHttp.delete<number>(this.url + '/' + id,{withCredentials:true});
    }

    updateOne(oAccion2Send: IAccion2Send): Observable<number> {
      return this.oHttp.put<number>(this.url + "/", oAccion2Send,{withCredentials:true});
    }


    newOne(oAccion2Send: IAccion2Send): Observable<number> {
      return this.oHttp.post<number>(this.url + "/", oAccion2Send,{withCredentials:true});
    }
    getCountAccions(): Observable<number> {
      return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
    }

  }
