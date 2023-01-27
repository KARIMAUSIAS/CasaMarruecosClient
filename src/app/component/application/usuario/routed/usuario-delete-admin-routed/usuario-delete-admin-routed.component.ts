import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Location } from '@angular/common';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;

@Component({
  selector: 'app-usuario-delete-admin-routed',
  templateUrl: './usuario-delete-admin-routed.component.html',
  styleUrls: ['./usuario-delete-admin-routed.component.css']
})
export class UsuarioDeleteAdminRoutedComponent implements OnInit {

    id: number = 0;
    msg: string = "";

    constructor(
      protected oLocation: Location,
      private oRouter: Router,
      private oActivatedRoute: ActivatedRoute,
      private oUsuarioService: UsuarioService,
      private oSessionService: SessionService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
    }

    removeOne() {
        this.oUsuarioService.removeOne(this.id).subscribe({
          next: (data: number) => {
            this.msg = "Usuario " + this.id + " removed";
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
            this.oRouter.navigate(['/admin/usuario/plist'])
          })
          myModal.show()
        }

  }
