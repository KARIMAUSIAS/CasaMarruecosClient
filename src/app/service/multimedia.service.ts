import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { IPage } from "../model/generic-types-interface";
import { IMultimedia, IMultimedia2Send } from "../model/multimedia-interface";

@Injectable({
    providedIn: 'root'
  })

  export class MultimediaService {

    private entityURL = '/multimedia';
    url: string = ""

    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }

    getMultimediaPlist(page: number, size: number,  id_evento: number, strSortField: string, strOrderDirection: string): Observable<IPage<IMultimedia>> {
      let params = new HttpParams()
        .set("page", page)
        .set("size", size);
      if (id_evento != 0) {
        params = params.set("evento", id_evento);
      }
      if (strSortField != "") { //&sort=codigo,[asc|desc]
        if (strOrderDirection != "") {
          params = params.set("sort", strSortField + "," + strOrderDirection);
        } else {
          params = params.set("sort", strSortField);
        }
      }
      return this.oHttp.get<IPage<IMultimedia>>(this.url, {withCredentials:true, params: params });
    }

    getOne(id: number): Observable<IMultimedia> {
      return this.oHttp.get<IMultimedia>(this.url + "/" + id,{withCredentials:true});
    }

    removeOne(id: number): Observable<number> {
      return this.oHttp.delete<number>(this.url + '/' + id,{withCredentials:true});
    }

    updateOne(oMultimedia2Send: IMultimedia2Send): Observable<number> {
      return this.oHttp.put<number>(this.url + "/", oMultimedia2Send,{withCredentials:true});
    }


    newOne(oMultimedia2Send: IMultimedia2Send): Observable<number> {
      return this.oHttp.post<number>(this.url + "/", oMultimedia2Send,{withCredentials:true});
    }
    getCountMultimedias(): Observable<number> {
      return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
    }

    getArchivos(id: number): Observable<String>{
        return this.oHttp.get<String>(this.url + "/archivo/" + id);
    }

  }
