import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IEvento } from 'src/app/model/evento-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-evento-plist-admin-routed',
  templateUrl: './evento-plist-admin-routed.component.html',
  styleUrls: ['./evento-plist-admin-routed.component.css']
})
export class EventoPlistAdminRoutedComponent implements OnInit {

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
      this.setPage(1);
      this.getPage();
    }

    setFilter(term: string): void {
      this.strTermFilter = term;
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

}
