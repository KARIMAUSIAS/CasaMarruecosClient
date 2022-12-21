import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUser } from 'src/app/model/user-interface';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  strOperation: string = "logout"
  oUserSession: IUser;

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService,
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) {
  }

  public closeSession() {
    this.oSessionService.logout().subscribe(data => {
      localStorage.clear();
      this.oRouter.navigate(['/','home']);
    });
  }

  ngOnInit(): void { }

}
