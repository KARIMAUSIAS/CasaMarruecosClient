import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';

import { Injectable, Injector } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private oSessionService: SessionService,
        private oRouter: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepting request ...', req);
        let request = req;
        
        if (this.oSessionService.isSessionActive()) {
            request = req.clone({
                setHeaders: {
                    authorization: `Bearer ${ this.oSessionService.getToken() }`
                  }
            });
            console.log('  session active! New req: ', request);
        } else {
            this.oRouter.navigateByUrl('login');
        }
        
        return next.handle(request);
    }
}