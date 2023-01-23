import { ITipousuario, ITipousuario2Send } from './../model/tipousuario-interface';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IPage } from '../model/generic-types-interface';

@Injectable({
    providedIn: 'root'
  })
  export class TipousuarioService {

    url: string = "";

    constructor( private oHttp : HttpClient ) {
        this.url = `${baseURL}${this.entityURL}`;
    }

    private entityURL: string = "/tipousuario";


    getTipousuarioPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<ITipousuario>>{
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

      return this.oHttp.get<IPage<ITipousuario>>(this.url,{withCredentials:true, params: params});
    }
    getOne(id: number): Observable<ITipousuario> {
        return this.oHttp.get<ITipousuario>(`${baseURL}${this.entityURL}` + "/" + id,{withCredentials:true});
      }

      removeOne(id: number): Observable<number> {
        return this.oHttp.delete<number>(this.url + '/' + id,{withCredentials:true});
      }

      updateOne(oTipousuario2Send: ITipousuario2Send): Observable<number> {
        return this.oHttp.put<number>(this.url + "/", oTipousuario2Send,{withCredentials:true});
      }


      newOne(oTipousuario2Send: ITipousuario2Send): Observable<number> {
        return this.oHttp.post<number>(this.url + "/", oTipousuario2Send,{withCredentials:true});
      }
      getCountUsuarios(): Observable<number> {
        return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
      }
  }
