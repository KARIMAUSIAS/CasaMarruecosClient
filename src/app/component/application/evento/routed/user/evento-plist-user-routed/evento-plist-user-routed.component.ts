import { ParticipacionService } from 'src/app/service/participacion.service';
import { SessionService } from 'src/app/service/session.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IEvento } from 'src/app/model/evento-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { EventoService } from 'src/app/service/evento.service';
import { IParticipacion2Send } from 'src/app/model/participacion-interface';
declare let bootstrap: any;

@Component({
  selector: 'app-evento-plist-user-routed',
  templateUrl: './evento-plist-user-routed.component.html',
  styleUrls: ['./evento-plist-user-routed.component.css']
})
export class EventoPlistUserRoutedComponent implements OnInit {

    responseFromServer: IPage<IEvento>;
    oParticipacion2Send: IParticipacion2Send = null;
    //
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    //
    id_usuario: number = 0;
    now = Date();
    strTermFilter: string = "";
    numberOfElements: number = 8;
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
    ) {
        this.oSessionService.getUserId().subscribe((n: number) => this.id_usuario = n);
    }

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

  fechaisLater(fecha: Date): boolean{

    //const fecha2 = new Date(this.now);
    const fecha2 = new Date("2019-10-10");
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
          this.modalTitle = "CasaMarruecos";
          this.modalContent = "Unido al evento " + data;
          this.showModal(data);
        }
      });
  }

  validarParticipacion(id_evento: number): boolean{

    this.oParticipacion2Send = {
        id: 0,
        usuario: {id: this.id_usuario  },
        evento: {id: id_evento  }
      }

    var validacion;
    this.oParticipacionService.validar(this.oParticipacion2Send).subscribe((b: boolean) => validacion = b);
    

    return validacion;
  }


}
