import { Component, Input, OnInit } from '@angular/core';
import { IEvento } from 'src/app/model/evento-interface';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-evento-detail-admin-unrouted',
  templateUrl: './evento-detail-admin-unrouted.component.html',
  styleUrls: ['./evento-detail-admin-unrouted.component.css']
})
export class EventoDetailAdminUnroutedComponent implements OnInit {

    @Input() id: number;
    oEvento: IEvento;

    constructor(
      private oEventoService: EventoService
    ) { }

    ngOnInit() {
      this.getOne();
    }

    getOne() {
      this.oEventoService.getOne(this.id).subscribe({
        next: (data: IEvento) => {
          this.oEvento = data;
          console.log(data);
        }
      })
    }

}
