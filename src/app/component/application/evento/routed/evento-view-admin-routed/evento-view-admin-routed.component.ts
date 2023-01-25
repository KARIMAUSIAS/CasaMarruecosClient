import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvento } from 'src/app/model/evento-interface';

@Component({
  selector: 'app-evento-view-admin-routed',
  templateUrl: './evento-view-admin-routed.component.html',
  styleUrls: ['./evento-view-admin-routed.component.css']
})
export class EventoViewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oEvento: IEvento = null;

    constructor(
      private oActivatedRoute: ActivatedRoute
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {

    }

}
