import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowDown, faArrowUp, faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { ITipousuario } from 'src/app/model/tipousuario-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';
declare let bootstrap: any;

@Component({
  selector: 'app-usuario-plist-admin-routed',
  templateUrl: './usuario-plist-admin-routed.component.html',
  styleUrls: ['./usuario-plist-admin-routed.component.css']
})
export class UsuarioPlistAdminRoutedComponent implements OnInit {


    id_usuario: number =1;
    msg: string = "";
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    responseFromServer: IPage<IUsuario>;
    //
    strTermFilter: string = "";
    id_tipousuarioFilter: number = 0;
    numberOfElements: number = 5;
    page: number = 0;
    sortField: string = "";
    sortDirection: string = "";
    //
    faEye = faEye;
    faUserPen = faUserPen;
    faTrash = faTrash;
    faArrowUp = faArrowUp;
    faArrowDown = faArrowDown;

    constructor(
      private oUsuarioService: UsuarioService,
    ) { }

    ngOnInit() {
      this.getPage();
    }

    getPage() {
      this.oUsuarioService.getUsuariosPlist(this.page, this.numberOfElements,
        this.strTermFilter, this.id_tipousuarioFilter, this.sortField, this.sortDirection)
        .subscribe({
          next: (resp: IPage<IUsuario>) => {
            this.responseFromServer = resp;
            if (this.page > resp.totalPages - 1) {
              this.page = resp.totalPages - 1;
            }
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          }
        })
    }

    setPage(e: number) {
      this.page = (e - 1);
      this.getPage();
    }

    setRpp(rpp: number) {
      this.numberOfElements = rpp;
      this.setPage(0);
      this.getPage();
    }

    setFilter(term: string): void {
      this.strTermFilter = term;
      this.setPage(0);
      this.getPage();
    }

    setFilterByTipousuario(id: number): void {
      this.id_tipousuarioFilter = id;
      this.setPage(0);
      this.getPage();
    }

    setOrder(order: string): void {
      this.sortField = order;
      if (this.sortDirection == "asc") {
        this.sortDirection = "desc";
      } else {
        this.sortDirection = "asc";
      }
      this.getPage();
    }

        closeParticipacionModal() {
          this.myModal.hide();
        }

        openModalParticipacion(id: number, participaciones: number): void {
            if(participaciones != 0){
                this.myModal = new bootstrap.Modal(document.getElementById("openParticipacion"), { //pasar el myModal como parametro
                    keyboard: false
                  })
                this.id_usuario = id;
              }else{
                this.msg = "No participa en eventos";
                this.myModal = null;
              this.showModal2();
              }
          this.myModal.show()

        }
        showModal2 = () => {
            const myModal = new bootstrap.Modal(document.getElementById("Info"), { //pasar el myModal como parametro
              keyboard: false
            })
            var myModalEl = document.getElementById("Info");
            myModalEl.addEventListener('hidden.bs.modal', (event): void => {
            })
            myModal.show()
          }

  }
