import { IUser } from 'src/app/model/user-interface';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DecodeService } from 'src/app/service/decode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    oFormularioLogin: FormGroup<IUser>;

    constructor(
      protected oRouter: Router,
      private oFormBuilder: FormBuilder,
      private oSessionService: SessionService,
      private oDecodeService: DecodeService
    ) {

      if (this.oSessionService.isSessionActive()) {
        this.oRouter.navigate(['/home']);
      }



      this.oFormularioLogin = <FormGroup>this.oFormBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });

    }

    ngOnInit() {
    }

    login() {
      this.oSessionService.login(this.oFormularioLogin.get('username')!.value, this.oFormularioLogin.get('password')!.value)
        .subscribe({
          next: (data: string) => {
            localStorage.setItem("token", data);
            this.oSessionService.emit(new EmitEvent(Events.login, data));
            this.oRouter.navigate(['/home']);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.status, error.statusText);
          }
        })
    }

    loginAsAdmin() {
      console.log("loginAsAdmin");
      this.oFormularioLogin.controls.username.setValue("kare");
      this.oFormularioLogin.controls.password.setValue("casamarruecos");
    }
}
