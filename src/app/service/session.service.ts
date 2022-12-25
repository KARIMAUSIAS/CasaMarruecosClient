import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, throwError, catchError, retry, tap, filter, map, Subscription } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})

export class SessionService {

    private entityURL = '/sesion';
    sURL: string = `${baseURL}${this.entityURL}`;
    subject = new Subject<any>();

    constructor(
        private http: HttpClient
    ) { }
    onCheck = new EventEmitter<any>();

    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
        if (environment) console.log("SessionService: error: " + errorMessage);
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        if (environment) console.log("SessionService: error: " + errorMessage);
      }
      return throwError(errorMessage);
    }

    login(loginData: String): Observable<String> {
      if (environment) console.log("SessionService: login");
      return this.http.post<String>(this.sURL, loginData, httpOptions).pipe(
        tap((u: String) => console.log("session.service login HTTP request executed", u)),
        retry(1),
        catchError(this.handleError));
    }

    logout(): Observable<String> {
      if (environment) console.log("SessionService: logout");
      return this.http.delete<String>(this.sURL, httpOptions).pipe(
        retry(1),
        catchError(this.handleError));
    }

    check(): Observable<String> {
      return this.http.get<String>(this.sURL, httpOptions)
    }

}
