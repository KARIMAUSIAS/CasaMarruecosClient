import { Component, OnInit } from '@angular/core';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private oSessionService: SessionService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.oSessionService.logout();
    this.oSessionService.emit(new EmitEvent(Events.logout, ""));
  }

}
