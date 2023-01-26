import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { IMultimedia } from 'src/app/model/multimedia-interface';
import { MultimediaService } from 'src/app/service/multimedia.service';

@Component({
  selector: 'app-multimedia-plist-admin-routed',
  templateUrl: './multimedia-plist-admin-routed.component.html',
  styleUrls: ['./multimedia-plist-admin-routed.component.css']
})
export class MultimediaPlistAdminRoutedComponent implements OnInit {

    responseFromServer: IPage<IMultimedia>;
    //
    strTermFilter: string = "";
    id_eventoFilter: number = 0;
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
      private oMultimediaService: MultimediaService
    ) { }

    ngOnInit() {
      this.getPage();
    }

    getPage() {
      this.oMultimediaService.getMultimediaPlist(this.page, this.numberOfElements,
         this.id_eventoFilter, this.sortField, this.sortDirection)
        .subscribe({
          next: (resp: IPage<IMultimedia>) => {
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

    setFilterByEvento(id: number): void {
      this.id_eventoFilter = id;
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
