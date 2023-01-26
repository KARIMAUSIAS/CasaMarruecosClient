import { Component, Input, OnInit } from '@angular/core';
import { IMultimedia } from 'src/app/model/multimedia-interface';
import { MultimediaService } from 'src/app/service/multimedia.service';

@Component({
  selector: 'app-multimedia-detail-admin-unrouted',
  templateUrl: './multimedia-detail-admin-unrouted.component.html',
  styleUrls: ['./multimedia-detail-admin-unrouted.component.css']
})
export class MultimediaDetailAdminUnroutedComponent implements OnInit {

    @Input() id: number;
    oMultimedia: IMultimedia;

    constructor(
      private oMultimediaService: MultimediaService
    ) { }

    ngOnInit() {
      this.getOne();
    }

    getOne() {
      this.oMultimediaService.getOne(this.id).subscribe({
        next: (data: IMultimedia) => {
          this.oMultimedia = data;
          console.log(data);
        }
      })
    }

}
