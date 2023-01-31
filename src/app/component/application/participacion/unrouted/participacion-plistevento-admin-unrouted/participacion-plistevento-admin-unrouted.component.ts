import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { IParticipacion } from 'src/app/model/participacion-interface';
import { EventoService } from 'src/app/service/evento.service';
import { ParticipacionService } from 'src/app/service/participacion.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-participacion-plistevento-admin-unrouted',
  templateUrl: './participacion-plistevento-admin-unrouted.component.html',
  styleUrls: ['./participacion-plistevento-admin-unrouted.component.css']
})
export class ParticipacionPlisteventoAdminUnroutedComponent implements OnInit {

    _id_usuario: number = 0;
    get id():number{
        return this._id_usuario;
    }
    @Input() set id(value: number){
        if(value!=0){
        this._id_usuario = value;
        this.setFilterByUsuario(this._id_usuario);
        }else{

        }

    }

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
      private oParticipacionService: ParticipacionService,
    ) { }

    ngOnInit(): void{

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
    }

    setFilter(term: string): void {
      this.strTermFilter = term;
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
