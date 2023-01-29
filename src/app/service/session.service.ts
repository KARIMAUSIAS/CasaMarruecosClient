import { IToken } from './../model/token-interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, filter, map, Subscription } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { CryptoService } from './crypto.service';
import { DecodeService } from './decode.service';


export enum Events {
    login,
    logout
}

export class EmitEvent {
    constructor(public event: Events, public token?: string) { }
}

@Injectable({
    providedIn: 'root'
})

export class SessionService {

    private entityURL = '/sesion';
    sURL: string = `${baseURL}${this.entityURL}`;
    subject = new Subject<EmitEvent>();

    constructor(
        private oCryptoService: CryptoService,
        private oHttpClient: HttpClient,
        private oDecodeService: DecodeService
    ) { }

    login(strLogin: string, strPassword: string): Observable<string> {
        const loginData = JSON.stringify({ usuario: strLogin, contraseña: this.oCryptoService.getSHA256(strPassword) });
        return this.oHttpClient.post<string>(this.sURL, loginData, httpOptions);
    }

    getUserName(): string {
        if (!this.isSessionActive()) {
            return "";
        } else {
            let token: string = localStorage.getItem("token");
            return this.oDecodeService.parseJwt(token).name;
        }
    }

    getToken(): string {
        return localStorage.getItem("token");
    }

    isSessionActive(): Boolean {
        let strToken: string = localStorage.getItem("token");
        if (strToken) {
            let oDecodedToken: IToken = this.oDecodeService.parseJwt(strToken);
            if (Date.now() >= oDecodedToken.exp * 1000) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    getTipousuario(): string {
        if (!this.isSessionActive()) {
            return "";
        } else {
            let token: string = localStorage.getItem("token");
            return this.oDecodeService.parseJwt(token).tipousuario;
        }
    }

    logout() {
        localStorage.removeItem("token");
    }

    on(event: Events): Observable<String> {
        return this.subject.pipe(
            filter((e: EmitEvent) => {
                return e.event === event;
            }),
            map((e: EmitEvent) => {
                return e.token;
            })
        )
    }

    emit(event: EmitEvent) {
        this.subject.next(event);
    }
}
