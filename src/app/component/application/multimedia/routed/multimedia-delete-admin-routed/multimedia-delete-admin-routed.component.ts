import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MultimediaService } from 'src/app/service/multimedia.service';
import { SessionService } from 'src/app/service/session.service';
import { Location } from '@angular/common';
declare let bootstrap: any;

@Component({
  selector: 'app-multimedia-delete-admin-routed',
  templateUrl: './multimedia-delete-admin-routed.component.html',
  styleUrls: ['./multimedia-delete-admin-routed.component.css']
})
export class MultimediaDeleteAdminRoutedComponent implements OnInit {

    id: number = 0;
    msg: string = "";

    constructor(
      protected oLocation: Location,
      private oRouter: Router,
      private oActivatedRoute: ActivatedRoute,
      private oMultimediaService: MultimediaService,
      private oSessionService: SessionService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.oSessionService.check;
    }

    removeOne() {
      this.oMultimediaService.removeOne(this.id).subscribe({
        next: (data: number) => {
          this.msg = "Multimedia " + this.id + " removed";
            this.showModal();
        }
      })
    }

    showModal = () => {
        const myModal = new bootstrap.Modal(document.getElementById("removeInfo"), { //pasar el myModal como parametro
          keyboard: false
        })
        var myModalEl = document.getElementById("removeInfo");
        myModalEl.addEventListener('hidden.bs.modal', (event): void => {
          this.oRouter.navigate(['/admin/multimedia/plist'])
        })
        myModal.show()
      }

}
