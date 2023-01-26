import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMultimedia } from 'src/app/model/multimedia-interface';

@Component({
  selector: 'app-multimedia-view-admin-routed',
  templateUrl: './multimedia-view-admin-routed.component.html',
  styleUrls: ['./multimedia-view-admin-routed.component.css']
})
export class MultimediaViewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oMultimedia: IMultimedia = null;

    constructor(
      private oActivatedRoute: ActivatedRoute
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {

    }

}
