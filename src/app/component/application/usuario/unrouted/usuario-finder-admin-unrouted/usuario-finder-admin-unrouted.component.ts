import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-finder-admin-unrouted',
  templateUrl: './usuario-finder-admin-unrouted.component.html',
  styleUrls: ['./usuario-finder-admin-unrouted.component.css']
})
export class UsuarioFinderAdminUnroutedComponent implements OnInit {

    @Output() closeEvent = new EventEmitter<number>();

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
      private oUsuarioService: UsuarioService
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

    selectionUsuario(id: number): void {
        this.closeEvent.emit(id);
      }
}
