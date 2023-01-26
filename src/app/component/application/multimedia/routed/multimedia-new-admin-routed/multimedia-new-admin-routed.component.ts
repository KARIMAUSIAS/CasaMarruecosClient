import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvento } from 'src/app/model/evento-interface';
import { IMultimedia, IMultimedia2Form, IMultimedia2Send } from 'src/app/model/multimedia-interface';
import { EventoService } from 'src/app/service/evento.service';
import { MultimediaService } from 'src/app/service/multimedia.service';
import { SessionService } from 'src/app/service/session.service';
declare let bootstrap: any;

@Component({
  selector: 'app-multimedia-new-admin-routed',
  templateUrl: './multimedia-new-admin-routed.component.html',
  styleUrls: ['./multimedia-new-admin-routed.component.css']
})
export class MultimediaNewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oMultimedia: IMultimedia = null;
    oMultimedia2Form: IMultimedia2Form = null;
    oMultimedia2Send: IMultimedia2Send = null;
    oForm: FormGroup<IMultimedia2Form>;
    // modal
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    eventoDescription: string = "";
    id_evento:number;

    constructor(
      private oRouter: Router,
      private oMultimediaService: MultimediaService,
      private oFormBuilder: FormBuilder,
      private oSessionService: SessionService,
      private oEventoService: EventoService,
    ) {
    }

    ngOnInit() {
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [''],
          archivo: ['', [Validators.required]],
          id_evento: ["", [Validators.required]]
        });
        this.updateEventoDescription(this.id_evento);
    }

    onSubmit() {
        console.log("onSubmit");
        this.oMultimedia2Send = {
          id: this.oForm.value.id,
          archivo: this.oForm.value.archivo,
          evento: {id: this.oForm.value.id_evento  }
        }
        if (this.oForm.valid) {
          this.oMultimediaService.newOne(this.oMultimedia2Send).subscribe({
            next: (data: number) => {
              //open bootstrap modal here
              this.modalTitle = "CasaMarruecos";
              this.modalContent = "Multimedia " + data + " created";
              this.showModal(data);
            }
          })
        }

      }

      showModal = (data) => {
        this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
          keyboard: false
        })
        var myModalEl = document.getElementById(this.mimodal);
        myModalEl.addEventListener('hidden.bs.modal', (event): void => {
          this.oRouter.navigate(['/admin/multimedia/view', data])
        })
        this.myModal.show()
      }

    openModalFindEvento(): void {
      this.myModal = new bootstrap.Modal(document.getElementById("findEvento"), { //pasar el myModal como parametro
        keyboard: false
      })
      this.myModal.show()
    }

    closeEventoModal(id_evento: number) {
      this.oForm.controls['id_evento'].setValue(id_evento);
      this.updateEventoDescription(id_evento);
      this.myModal.hide();
    }

    updateEventoDescription(id_evento: number) {
      this.oEventoService.getOne(id_evento).subscribe({
        next: (data: IEvento) => {
          this.eventoDescription = "" + data.fecha;
        },
        error: (error: any) => {
          this.eventoDescription = "Evento not found";
          this.oForm.controls['id_evento'].setErrors({'incorrect': true});
        }
      })
    }

}
