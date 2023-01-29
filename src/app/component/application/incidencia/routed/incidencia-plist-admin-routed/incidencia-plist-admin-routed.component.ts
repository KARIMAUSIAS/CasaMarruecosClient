import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { IIncidencia } from 'src/app/model/incidencia-interface';
import { IncidenciaService } from 'src/app/service/incidencia.service';

@Component({
  selector: 'app-incidencia-plist-admin-routed',
  templateUrl: './incidencia-plist-admin-routed.component.html',
  styleUrls: ['./incidencia-plist-admin-routed.component.css']
})
export class IncidenciaPlistAdminRoutedComponent implements OnInit {

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
      this.setPage(0);
      this.getPage();
    }

    setFilter(term: string): void {
      this.strTermFilter = term;
      this.setPage(0);
      this.getPage();
    }

    setFilterByUsuario(id: number): void {
      this.id_usuarioFilter = id;
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

}
