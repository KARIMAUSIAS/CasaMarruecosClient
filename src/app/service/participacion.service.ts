import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IPage } from "../model/generic-types-interface";
import { IParticipacion, IParticipacion2Send } from "../model/participacion-interface";

@Injectable({
    providedIn: 'root'
  })

  export class ParticipacionService {

    private entityURL = '/participacion';
    url: string = ""

    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }

    newOne(oParticipacion2Send: IParticipacion2Send): Observable<number> {
        return this.oHttp.post<number>(this.url + "/", oParticipacion2Send,{withCredentials:true});
      }

    validar(oParticipacion2Send: IParticipacion2Send): Observable<boolean> {
        return this.oHttp.post<boolean>(this.url + "/validar", oParticipacion2Send);
    };

    getParticipacionPlist(page: number, size: number, id_usuario: number, id_evento: number, strSortField: string, strOrderDirection: string): Observable<IPage<IParticipacion>> {
      let params = new HttpParams()
        .set("page", page)
        .set("size", size);
      if (id_usuario != 0) {
        params = params.set("usuario", id_usuario);
      }
      if (id_evento !=0){
        params = params.set("evento", id_evento);
      }
      if (strSortField != "") { //&sort=codigo,[asc|desc]
        if (strOrderDirection != "") {
          params = params.set("sort", strSortField + "," + strOrderDirection);
        } else {
          params = params.set("sort", strSortField);
        }
      }
      return this.oHttp.get<IPage<IParticipacion>>(this.url, {withCredentials:true, params: params });
    }

  }
