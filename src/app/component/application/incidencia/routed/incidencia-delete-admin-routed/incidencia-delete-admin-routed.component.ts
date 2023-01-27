import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidenciaService } from 'src/app/service/incidencia.service';
import { SessionService } from 'src/app/service/session.service';
import { Location } from '@angular/common';
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
      private oRouter: Router,
      private oActivatedRoute: ActivatedRoute,
      private oIncidenciaService: IncidenciaService,
      private oSessionService: SessionService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
    }

    removeOne() {
        this.oIncidenciaService.removeOne(this.id).subscribe({
          next: (data: number) => {
            this.msg = "Incidencia " + this.id + " removed";
              this.showModal();
          }
        })
      }

      showModal = () => {
          const myModal = new bootstrap.Modal(document.getElementById("removeInfo"), { //pasar el myModal como parametro
            keyboard: false
          })
          var myModalEl = document.getElementById("removeInfo");
          myModalEl.addEventListener('hidden.bs.modal', (event): void => {
            this.oRouter.navigate(['/admin/incidencia/plist'])
          })
          myModal.show()
        }

}
