import { Events, SessionService } from 'src/app/service/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  strUserName: string = "";
  strTipousuario: string = "";

  constructor(
    private oSessionService: SessionService,
  ) {
    this.strUserName = this.oSessionService.getUserName();
  }

  ngOnInit() {
    this.oSessionService.on(Events.login).subscribe(
        (data: string) => {
          this.strUserName = this.oSessionService.getUserName();
          this.strTipousuario = this.oSessionService.getTipousuario();
          console.log(this.strTipousuario);
        });
      this.oSessionService.on(Events.logout).subscribe(
        (data: string) => {
          this.strUserName = '';
          this.strTipousuario = "";
        });
  }

}
