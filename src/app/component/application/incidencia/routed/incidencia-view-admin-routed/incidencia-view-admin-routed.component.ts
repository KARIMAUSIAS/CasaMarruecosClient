import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIncidencia } from 'src/app/model/incidencia-interface';

@Component({
  selector: 'app-incidencia-view-admin-routed',
  templateUrl: './incidencia-view-admin-routed.component.html',
  styleUrls: ['./incidencia-view-admin-routed.component.css']
})
export class IncidenciaViewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oIncidencia: IIncidencia = null;

    constructor(
      private oActivatedRoute: ActivatedRoute
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {

    }
}
