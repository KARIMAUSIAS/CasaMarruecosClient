import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from 'src/app/service/evento.service';
import { SessionService } from 'src/app/service/session.service';
declare let bootstrap: any;

@Component({
  selector: 'app-evento-delete-admin-routed',
  templateUrl: './evento-delete-admin-routed.component.html',
  styleUrls: ['./evento-delete-admin-routed.component.css']
})
export class EventoDeleteAdminRoutedComponent implements OnInit {

    id: number = 0;
    msg: string = "";

    constructor(
      protected oLocation: Location,
      private oRouter: Router,
      private oActivatedRoute: ActivatedRoute,
      private oEventoService: EventoService,
      private oSessionService: SessionService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.oSessionService.check;
    }

    removeOne() {
        this.oEventoService.removeOne(this.id).subscribe({
          next: (data: number) => {
            this.msg = "Evento " + this.id + " removed";
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
            this.oRouter.navigate(['/admin/evento/plist'])
          })
          myModal.show()
        }

}
