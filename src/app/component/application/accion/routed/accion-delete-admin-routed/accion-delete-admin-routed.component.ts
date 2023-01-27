import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
      private oRouter: Router,
      private oActivatedRoute: ActivatedRoute,
      private oAccionService: AccionService,
      private oSessionService: SessionService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
    }

    removeOne() {
      this.oAccionService.removeOne(this.id).subscribe({
        next: (data: number) => {
          this.msg = "Accion " + this.id + " removed";
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
          this.oRouter.navigate(['/admin/accion/plist'])
        })
        myModal.show()
      }

}
