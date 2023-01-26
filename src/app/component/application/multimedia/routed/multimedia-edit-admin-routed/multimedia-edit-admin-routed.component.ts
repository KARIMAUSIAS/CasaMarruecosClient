import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvento } from 'src/app/model/evento-interface';
import { IMultimedia, IMultimedia2Form, IMultimedia2Send } from 'src/app/model/multimedia-interface';
import { EventoService } from 'src/app/service/evento.service';
import { MultimediaService } from 'src/app/service/multimedia.service';
import { Location } from '@angular/common';
declare let bootstrap: any;

@Component({
  selector: 'app-multimedia-edit-admin-routed',
  templateUrl: './multimedia-edit-admin-routed.component.html',
  styleUrls: ['./multimedia-edit-admin-routed.component.css']
})
export class MultimediaEditAdminRoutedComponent implements OnInit {

    id: number = 0;
    oMultimedia: IMultimedia = null;
    oMultimedia2Form: IMultimedia2Form = null;
    oMultimedia2Send: IMultimedia2Send = null;
    oForm: FormGroup<IMultimedia2Form>;
    imagenSrc: String = null;
    // modal
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    // foreigns
    eventoDescription: string = "";

    constructor(
      private oRouter: Router,
      protected oLocation: Location,
      private oActivatedRoute: ActivatedRoute,
      private oMultimediaService: MultimediaService,
      private oFormBuilder: FormBuilder,
      private oEventoService: EventoService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
      this.getOne();

    }

    getOne() {
        this.oMultimediaService.getOne(this.id).subscribe({
          next: (data: IMultimedia) => {
            this.oMultimedia = data;
            console.log(data);
            this.imagenSrc = data.archivo;
            this.oForm = <FormGroup>this.oFormBuilder.group({
              id: [data.id, [Validators.required]],
              archivo: [],
              id_evento: [data.evento.id, [Validators.required]]
            });
            this.updateEventoDescription(this.oMultimedia.evento.id);
          }
        })
      }

    onSubmit() {
      console.log("onSubmit");
      this.oMultimedia2Send = {
        id: this.oForm.value.id,
        archivo: this.oForm.value.archivo,
        evento: {id: this.oForm.value.id_evento  }
      }
      if (this.oForm.valid) {
        this.oMultimediaService.updateOne(this.oMultimedia2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Multimedia " + this.id + " updated";
            this.showModal();
          }
        })
      }
    }

    showModal = () => {
      this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
        keyboard: false
      })
      var myModalEl = document.getElementById(this.mimodal);
      myModalEl.addEventListener('hidden.bs.modal', (event): void => {
        this.oRouter.navigate(['/admin/multimedia/view', this.id])
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
