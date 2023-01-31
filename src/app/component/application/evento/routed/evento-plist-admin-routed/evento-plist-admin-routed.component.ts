import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IEvento } from 'src/app/model/evento-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { EventoService } from 'src/app/service/evento.service';
declare let bootstrap: any;

@Component({
  selector: 'app-evento-plist-admin-routed',
  templateUrl: './evento-plist-admin-routed.component.html',
  styleUrls: ['./evento-plist-admin-routed.component.css']
})
export class EventoPlistAdminRoutedComponent implements OnInit {

    id_evento: number = null;
    msg: string = "";
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";

    responseFromServer: IPage<IEvento>;
    //
    strTermFilter: string = "";
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
      private oEventoService: EventoService
    ) { }

    ngOnInit() {
      this.getPage();
    }

    getPage() {
      this.oEventoService.getEventosPlist(this.page, this.numberOfElements,
        this.strTermFilter, this.sortField, this.sortDirection)
        .subscribe({
          next: (resp: IPage<IEvento>) => {
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


    setOrder(order: string): void {
      this.sortField = order;
      if (this.sortDirection == "asc") {
        this.sortDirection = "desc";
      } else {
        this.sortDirection = "asc";
      }
      this.getPage();
    }

    showModal = () => {
        this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
          keyboard: false
        })
        var myModalEl = document.getElementById(this.mimodal);
        myModalEl.addEventListener('hidden.bs.modal', (event): void => {
        })
        this.myModal.show()
      }

        closeParticipacionModal() {
          this.myModal.hide();
        }

        openModalParticipacion(id: number, participaciones: number): void {
            if(participaciones != 0){
                this.myModal = new bootstrap.Modal(document.getElementById("openParticipacion"), { //pasar el myModal como parametro
                    keyboard: false
                  })
                this.id_evento = id;
              }else{
                this.msg = "No tiene participantes";
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
