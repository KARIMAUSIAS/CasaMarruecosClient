import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccion } from 'src/app/model/accion-interface';

@Component({
  selector: 'app-accion-view-admin-routed',
  templateUrl: './accion-view-admin-routed.component.html',
  styleUrls: ['./accion-view-admin-routed.component.css']
})
export class AccionViewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oAccion: IAccion = null;

    constructor(
      private oActivatedRoute: ActivatedRoute
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {

    }
}
