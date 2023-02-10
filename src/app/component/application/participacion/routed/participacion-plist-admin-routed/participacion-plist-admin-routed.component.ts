import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { IParticipacion } from 'src/app/model/participacion-interface';
import { EventoService } from 'src/app/service/evento.service';
import { ParticipacionService } from 'src/app/service/participacion.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-participacion-plist-admin-routed',
  templateUrl: './participacion-plist-admin-routed.component.html',
  styleUrls: ['./participacion-plist-admin-routed.component.css']
})
export class ParticipacionPlistAdminRoutedComponent implements OnInit {

    responseFromServer: IPage<IParticipacion>;
    //
    strTermFilter: string = "";
    id_eventoFilter: number = 0;
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
      private oParticipacionService: ParticipacionService
    ) { }

    ngOnInit() {
        this.getPage();

    }

    getPage() {
      this.oParticipacionService.getParticipacionPlist(this.page, this.numberOfElements,this.id_usuarioFilter, this.id_eventoFilter, this.sortField, this.sortDirection)
        .subscribe({
          next: (resp: IPage<IParticipacion>) => {
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
    }

    setFilterByEvento(id: number): void {
      this.id_eventoFilter = id;
      this.setPage(0);

    }

    setFilterByUsuario(id: number): void {
        this.id_usuarioFilter = id;
        this.setPage(0);
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
