import { Component, Input, OnInit } from '@angular/core';
import { IIncidencia } from 'src/app/model/incidencia-interface';
import { IncidenciaService } from 'src/app/service/incidencia.service';

@Component({
  selector: 'app-incidencia-detail-admin-unrouted',
  templateUrl: './incidencia-detail-admin-unrouted.component.html',
  styleUrls: ['./incidencia-detail-admin-unrouted.component.css']
})
export class IncidenciaDetailAdminUnroutedComponent implements OnInit {

    @Input() id: number;
    oIncidencia: IIncidencia;

    constructor(
      private oIncidenciaService: IncidenciaService
    ) { }

    ngOnInit() {
      this.getOne();
    }

    getOne() {
      this.oIncidenciaService.getOne(this.id).subscribe({
        next: (data: IIncidencia) => {
          this.oIncidencia = data;
          console.log(data);
        }
      })
    }

}
