import { Component, Input, OnInit } from '@angular/core';
import { IAccion } from 'src/app/model/accion-interface';
import { AccionService } from 'src/app/service/accion.service';

@Component({
  selector: 'app-accion-detail-admin-unrouted',
  templateUrl: './accion-detail-admin-unrouted.component.html',
  styleUrls: ['./accion-detail-admin-unrouted.component.css']
})
export class AccionDetailAdminUnroutedComponent implements OnInit {

    @Input() id: number;
    oAccion: IAccion;

    constructor(
      private oAccionService: AccionService
    ) { }

    ngOnInit() {
      this.getOne();
    }

    getOne() {
      this.oAccionService.getOne(this.id).subscribe({
        next: (data: IAccion) => {
          this.oAccion = data;
          console.log(data);
        }
      })
    }

}
