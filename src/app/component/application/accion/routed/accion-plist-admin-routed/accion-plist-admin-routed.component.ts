import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IAccion } from 'src/app/model/accion-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { AccionService } from 'src/app/service/accion.service';

@Component({
  selector: 'app-accion-plist-admin-routed',
  templateUrl: './accion-plist-admin-routed.component.html',
  styleUrls: ['./accion-plist-admin-routed.component.css']
})
export class AccionPlistAdminRoutedComponent implements OnInit {

    responseFromServer: IPage<IAccion>;
    //
    strTermFilter: string = "";
    id_incidenciaFilter: number = 0;
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
      private oAccionService: AccionService,
      private oActivatedRoute: ActivatedRoute,
    ) {
        const id_incidencia =  this.oActivatedRoute.snapshot.params['id_incidencia'];
        if(id_incidencia == null){
            this.id_incidenciaFilter = 0;
        }else{
            this.id_incidenciaFilter = id_incidencia;
        }
    }

    ngOnInit() {
      this.getPage();
    }

    getPage() {
      this.oAccionService.getAccionsPlist(this.page, this.numberOfElements,
        this.strTermFilter, this.id_incidenciaFilter, this.sortField, this.sortDirection)
        .subscribe({
          next: (resp: IPage<IAccion>) => {
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

    setFilterByIncidencia(id: number): void {
      this.id_incidenciaFilter = id;
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
