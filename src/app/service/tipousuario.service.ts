import { ITipousuario } from './../model/tipousuario-interface';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IPage } from '../model/generic-types-interface';

@Injectable({
    providedIn: 'root'
  })
  export class TipousuarioService {

    constructor( private oHttp : HttpClient ) { }

    private entityURL: string = "/tipousuario";


    getTipousuarioPlist(page: number, size: number): Observable<IPage<ITipousuario>>{
      let params = new HttpParams()
      .set("page", page)
      .set("size", size);

      const url : string = `${baseURL}${this.entityURL}`;
      return this.oHttp.get<IPage<ITipousuario>>(url,{withCredentials:true, params: params});
    }
    getOne(id: number): Observable<ITipousuario> {
        return this.oHttp.get<ITipousuario>(`${baseURL}${this.entityURL}` + "/" + id,{withCredentials:true});
      }
  }
