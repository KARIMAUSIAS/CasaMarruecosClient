import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IEvento, IEvento2Send } from "../model/evento-interface";
import { IPage } from "../model/generic-types-interface";

@Injectable({
    providedIn: 'root'
  })

  export class EventoService {

    private entityURL = '/evento';
    url: string = ""

    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }

    getEventosPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<IEvento>> {
      let params = new HttpParams()
        .set("filter", termino)
        .set("page", page)
        .set("size", size);
      if (strSortField != "") { //&sort=codigo,[asc|desc]
        if (strOrderDirection != "") {
          params = params.set("sort", strSortField + "," + strOrderDirection);
        } else {
          params = params.set("sort", strSortField);
        }
      }
      return this.oHttp.get<IPage<IEvento>>(this.url, {withCredentials:true, params: params });
    }

    getOne(id: number): Observable<IEvento> {
      return this.oHttp.get<IEvento>(this.url + "/" + id,{withCredentials:true});
    }

    removeOne(id: number): Observable<number> {
      return this.oHttp.delete<number>(this.url + '/' + id,{withCredentials:true});
    }

    updateOne(oEvento2Send: IEvento2Send): Observable<number> {
      return this.oHttp.put<number>(this.url + "/", oEvento2Send,{withCredentials:true});
    }


    newOne(oEvento2Send: IEvento2Send): Observable<number> {
      return this.oHttp.post<number>(this.url + "/", oEvento2Send,{withCredentials:true});
    }
    getCountEventos(): Observable<number> {
      return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
    }

  }
