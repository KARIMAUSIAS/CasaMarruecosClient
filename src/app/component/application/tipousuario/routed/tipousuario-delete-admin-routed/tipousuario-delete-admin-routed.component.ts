import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { Location } from '@angular/common';
declare let bootstrap: any;

@Component({
  selector: 'app-tipousuario-delete-admin-routed',
  templateUrl: './tipousuario-delete-admin-routed.component.html',
  styleUrls: ['./tipousuario-delete-admin-routed.component.css']
})
export class TipousuarioDeleteAdminRoutedComponent implements OnInit {

    id: number = 0;
    msg: string = "";

    constructor(
      protected oLocation: Location,
      private oRouter: Router,
      private oActivatedRoute: ActivatedRoute,
      private oTipousuarioService: TipousuarioService,
      private oSessionService: SessionService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
    }

    removeOne() {
        this.oTipousuarioService.removeOne(this.id).subscribe({
          next: (data: number) => {
            this.msg = "Tipo usuario " + this.id + " removed";
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
            this.oRouter.navigate(['/admin/tipousuario/plist'])
          })
          myModal.show()
        }
}
