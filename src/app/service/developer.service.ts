import { IDeveloper2Form, IDeveloper2Send } from './../model/developer-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IDeveloper } from '../model/developer-interface';
import { IPage } from '../model/generic-types-interface';


@Injectable({
  providedIn: 'root'
})

export class DeveloperService {

  private entityURL = '/developer';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getDevelopersPlist(page: number, size: number, termino: string, id_usertype: number, strSortField: string, strOrderDirection: string): Observable<IPage<IDeveloper>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_usertype != 0) {
      params = params.set("usertype", id_usertype);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IDeveloper>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IDeveloper> {
    return this.oHttp.get<IDeveloper>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oDeveloper2Send: IDeveloper2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oDeveloper2Send);
  }


  newOne(oDeveloper2Send: IDeveloper2Send): Observable<number> {       
    return this.oHttp.post<number>(this.url, oDeveloper2Send);
  }

}
