
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/generic-types-interface';
import { IUsuario, IUsuario2Send } from '../model/usuario-interface';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private entityURL = '/usuario';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getUsuariosPlist(page: number, size: number, termino: string, id_usertype: number, strSortField: string, strOrderDirection: string): Observable<IPage<IUsuario>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_usertype != 0) {
      params = params.set("tipousuario", id_usertype);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IUsuario>>(this.url, {withCredentials:true, params: params });
  }

  getOne(id: number): Observable<IUsuario> {
    return this.oHttp.get<IUsuario>(this.url + "/" + id,{withCredentials:true});
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id,{withCredentials:true});
  }

  updateOne(oUsuario2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.put<number>(this.url + "/", oUsuario2Send,{withCredentials:true});
  }


  newOne(oUsuario2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.post<number>(this.url + "/", oUsuario2Send,{withCredentials:true});
  }
  getCountUsuarios(): Observable<number> {
    return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
  }

}
