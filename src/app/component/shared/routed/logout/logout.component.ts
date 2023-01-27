import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    strUserName: string = "";

    constructor(
      protected oRouter: Router,
      private oSessionService: SessionService
    ) {

      if (this.oSessionService.isSessionActive()) {
        this.strUserName = this.oSessionService.getUserName();
      } else {
        this.oRouter.navigate(['/home']);
      }

    }

    ngOnInit() {
    }

    logout() {
      this.oSessionService.logout();
      this.oSessionService.emit(new EmitEvent(Events.logout, ""));
    }

}
