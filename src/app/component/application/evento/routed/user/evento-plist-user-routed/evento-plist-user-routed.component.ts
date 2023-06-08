import { ParticipacionService } from 'src/app/service/participacion.service';
import { SessionService } from 'src/app/service/session.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IEvento } from 'src/app/model/evento-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { EventoService } from 'src/app/service/evento.service';
import { IParticipacion, IParticipacion2Send } from 'src/app/model/participacion-interface';
import { IMultimedia } from 'src/app/model/multimedia-interface';
import { MultimediaService } from 'src/app/service/multimedia.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
declare let bootstrap: any;

@Component({
  selector: 'app-evento-plist-user-routed',
  templateUrl: './evento-plist-user-routed.component.html',
  styleUrls: ['./evento-plist-user-routed.component.css']
})
export class EventoPlistUserRoutedComponent implements OnInit {

    subscription: Subscription;

    responseFromServer: IPage<IEvento>;
    oParticipacion2Send: IParticipacion2Send = null;
    participacionesUser: number[];
    //
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    //
    validante: number = 0;
    id_usuario: number = 0;
    id_eventoFilter: number = 0;
    now = Date();
    strTermFilter: string = "";
    numberOfElements: number = 6;
    page: number = 0;
    sortField: string = "fecha";
    sortDirection: string = "desc";
    //
    faEye = faEye;
    faUserPen = faUserPen;
    faTrash = faTrash;
    faArrowUp = faArrowUp;
    faArrowDown = faArrowDown;

    constructor(
      private oEventoService: EventoService,
      private oSessionService: SessionService,
      private oParticipacionService: ParticipacionService,
      private oRouter: Router,
    ) {
        this.oSessionService.getUserId().subscribe({
            next: (data: number) =>{
                this.getParticipaciones(data);
            }
        });

    }

    ngOnInit() {
      this.oSessionService.getUserId().subscribe((n: number) => this.id_usuario = n);
      this.getPage();
    }

  getPage() {
    this.oEventoService.getEventosPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IEvento>) => {
          this.responseFromServer = resp;
          console.log(resp);

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

  fechaisLater(fecha: Date): boolean{

    //const fecha2 = new Date(this.now);
    const fecha2 = new Date("2012-10-10");
    const fecha1 = new Date(fecha);


    if(fecha2 > fecha1){
        return false;
    }else{
    return true;
    }
  }

  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
        window.location.reload();
    })
    this.myModal.show()
  }

  unirseEvento(id_evento: number):void{

    this.oParticipacion2Send = {
        id: 0,
        usuario: {id: this.id_usuario  },
        evento: {id: id_evento  }
      }
    this.oParticipacionService.newOne(this.oParticipacion2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          if(data == null){
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Ya participas en el evento";
            this.showModal(data);
          }else{
          this.modalTitle = "CasaMarruecos";
          this.modalContent = "Unido al evento";
          this.showModal(data);
        }
    }
      });
  }

  borrarParticipacion(id_evento: number):void{

    this.oParticipacionService.removeOne(this.id_usuario, id_evento).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          if(data == null){
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "No participas en el evento";
            this.showModal(data);
          }else{
          this.modalTitle = "CasaMarruecos";
          this.modalContent = "Participacion borrada";
          this.showModal(data);

        }
    }
      });
  }

  getParticipaciones(id: number){

    this.oParticipacionService.getParticipacionesUser(id).subscribe({
        next: (data: Array<number>) => {
            this.participacionesUser = data;

        }
    })
  }

}

