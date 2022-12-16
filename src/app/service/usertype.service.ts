import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { UsertypeResponse } from '../model/usertype-response-interface';

@Injectable({
  providedIn: 'root'
})
export class UsertypeService {

  constructor( private oHttp : HttpClient ) { }

  private entityURL: string = "/usertype";


  getUsersTypePlist(page: number, size: number): Observable<UsertypeResponse>{
    let params = new HttpParams()
    .set("page", page)
    .set("size", size);

    const url : string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<UsertypeResponse>(url,{params: params});
  }
}
