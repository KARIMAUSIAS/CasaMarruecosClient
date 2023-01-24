import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { IIncidencia } from 'src/app/model/incidencia-interface';
import { IncidenciaService } from 'src/app/service/incidencia.service';

@Component({
  selector: 'app-incidencia-finder-admin-unrouted',
  templateUrl: './incidencia-finder-admin-unrouted.component.html',
  styleUrls: ['./incidencia-finder-admin-unrouted.component.css']
})
export class IncidenciaFinderAdminUnroutedComponent implements OnInit {

    @Output() closeEvent = new EventEmitter<number>();

    responseFromServer: IPage<IIncidencia>;
    //
    strTermFilter: string = "";
    id_usuarioFilter: number = 0;
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
      private oIncidenciaService: IncidenciaService
    ) { }

    ngOnInit() {
      this.getPage();
    }

    getPage() {
      this.oIncidenciaService.getIncidenciasPlist(this.page, this.numberOfElements,
        this.strTermFilter, this.id_usuarioFilter, this.sortField, this.sortDirection)
        .subscribe({
          next: (resp: IPage<IIncidencia>) => {
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

    setFilterByUsuario(id: number): void {
      this.id_usuarioFilter = id;
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
    selectionIncidencia(id: number): void {
        this.closeEvent.emit(id);
      }

}
