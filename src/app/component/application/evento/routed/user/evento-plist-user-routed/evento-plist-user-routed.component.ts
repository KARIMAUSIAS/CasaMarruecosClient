import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IEvento } from 'src/app/model/evento-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-evento-plist-user-routed',
  templateUrl: './evento-plist-user-routed.component.html',
  styleUrls: ['./evento-plist-user-routed.component.css']
})
export class EventoPlistUserRoutedComponent implements OnInit {

    responseFromServer: IPage<IEvento>;
    //
    now = Date();
    strTermFilter: string = "";
    numberOfElements: number = 10;
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
      private oEventoService: EventoService
    ) {}

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


}
