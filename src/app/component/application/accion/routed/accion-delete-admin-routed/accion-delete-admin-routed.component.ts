import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AccionService } from 'src/app/service/accion.service';
import { SessionService } from 'src/app/service/session.service';
declare let bootstrap: any;

@Component({
  selector: 'app-accion-delete-admin-routed',
  templateUrl: './accion-delete-admin-routed.component.html',
  styleUrls: ['./accion-delete-admin-routed.component.css']
})
export class AccionDeleteAdminRoutedComponent implements OnInit {

    id: number = 0;
    msg: string = "";

    constructor(
      protected oLocation: Location,
      private oActivatedRoute: ActivatedRoute,
      private oAccionService: AccionService,
      private oSessionService: SessionService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.oSessionService.check;
    }

    removeOne() {
      this.oAccionService.removeOne(this.id).subscribe({
        next: (data: number) => {
          this.msg = "Accion " + this.id + " removed";
          const myModal = new bootstrap.Modal('#removeInfo', {
            keyboard: false
          })
          myModal.show();
          this.oLocation.back();
        }
      })
    }

}
