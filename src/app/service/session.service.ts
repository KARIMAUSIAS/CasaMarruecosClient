import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, Subscription, Subject } from 'rxjs';
import { CryptoService } from './crypto.service';
import { DecodeService } from './decode.service';
import { baseURL, httpOptions } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SessionService {

    private entityURL = '/session';
    sURL: string = `${baseURL}${this.entityURL}`;
    subject = new Subject<any>();

    constructor(
        private oCryptoService: CryptoService,
        private oHttpClient: HttpClient,
        private oDecodeService: DecodeService
    ) { }

    login(strLogin: string, strPassword: string): Observable<string> {
        const loginData = JSON.stringify({ username: strLogin, password: this.oCryptoService.getSHA256(strPassword) });
        return this.oHttpClient.post<string>(this.sURL, loginData, httpOptions);
    }

    getUserName(): string {
        if (!this.isSessionActive()) {
            return "";
        } else {
            let token: string = localStorage.getItem("token");
            return this.oDecodeService.decode(token).name;
        }
    }

    getToken(): string {
        return localStorage.getItem("token");
    }

    isSessionActive(): Boolean {
        let strToken: string = localStorage.getItem("token");
        if (strToken) {
            let oDecodedToken = this.oDecodeService.decode(strToken);
            if (Date.now() >= oDecodedToken.exp * 1000) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem("token");
    }

    on(event: Events, action: any): Subscription {
        return this.subject
          .pipe(
            filter((e: EmitEvent) => {
              return e.name === event;
            }),
            map((e: EmitEvent) => {
              return e.value;
            })
          )
          .subscribe(action);
      }
    
      emit(event: EmitEvent) {
        this.subject.next(event);
      }


}

export class EmitEvent {
    constructor(public name: any, public value?: any) {}
  }
  
  // this works like a communication channel
  export enum Events {
    login,
    logout
  }