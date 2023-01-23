import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IncidenciaService } from 'src/app/service/incidencia.service';
import { SessionService } from 'src/app/service/session.service';
declare let bootstrap: any;

@Component({
  selector: 'app-incidencia-delete-admin-routed',
  templateUrl: './incidencia-delete-admin-routed.component.html',
  styleUrls: ['./incidencia-delete-admin-routed.component.css']
})
export class IncidenciaDeleteAdminRoutedComponent implements OnInit {

    id: number = 0;
    msg: string = "";

    constructor(
      protected oLocation: Location,
      private oActivatedRoute: ActivatedRoute,
      private oIncidenciaService: IncidenciaService,
      private oSessionService: SessionService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.oSessionService.check;
    }

    removeOne() {
      this.oIncidenciaService.removeOne(this.id).subscribe({
        next: (data: number) => {
          this.msg = "Incidencia " + this.id + " removed";
          const myModal = new bootstrap.Modal('#removeInfo', {
            keyboard: false
          })
          myModal.show();
          this.oLocation.back();
        }
      })
    }

}
