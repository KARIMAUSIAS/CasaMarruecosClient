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
  strUsuarioId: number = 0;

  constructor(
    private oSessionService: SessionService,
  ) {
    this.strUserName = this.oSessionService.getUserName();
    this.strTipousuario = this.oSessionService.getTipousuario();
    this.oSessionService.getUserId().subscribe((n: number) => this.strUsuarioId = n);
  }

  ngOnInit() {
    this.oSessionService.on(Events.login).subscribe(
        (data: string) => {
          this.strUserName = this.oSessionService.getUserName();
          this.strTipousuario = this.oSessionService.getTipousuario();
          this.oSessionService.getUserId().subscribe((n: number) => this.strUsuarioId = n);
          console.log(this.strUsuarioId);
        });
      this.oSessionService.on(Events.logout).subscribe(
        (data: string) => {
          this.strUserName = '';
          this.strTipousuario = "";
          this.strUsuarioId = 0;
        });
  }

}
