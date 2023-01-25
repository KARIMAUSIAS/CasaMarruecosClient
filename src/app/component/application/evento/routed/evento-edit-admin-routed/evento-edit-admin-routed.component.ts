import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvento, IEvento2Form, IEvento2Send } from 'src/app/model/evento-interface';
import { EventoService } from 'src/app/service/evento.service';
import { Location } from '@angular/common';
declare let bootstrap: any;

@Component({
  selector: 'app-evento-edit-admin-routed',
  templateUrl: './evento-edit-admin-routed.component.html',
  styleUrls: ['./evento-edit-admin-routed.component.css']
})
export class EventoEditAdminRoutedComponent implements OnInit {

    id: number = 0;
    oEvento: IEvento = null;
    oEvento2Form: IEvento2Form = null;
    oEvento2Send: IEvento2Send = null;
    oForm: FormGroup<IEvento2Form>;
    // modal
    @Input() mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    // foreigns
    incidenciaDescription: string = "";

    constructor(
      private oRouter: Router,
      protected oLocation: Location,
      private oActivatedRoute: ActivatedRoute,
      private oEventoService: EventoService,
      private oFormBuilder: FormBuilder,
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
      this.getOne();

    }

    getOne() {
        this.oEventoService.getOne(this.id).subscribe({
          next: (data: IEvento) => {
            this.oEvento = data;
            console.log(data);
            this.oForm = <FormGroup>this.oFormBuilder.group({
              id: [data.id, [Validators.required]],
              descripcion: [data.descripcion],
              fecha: [data.fecha, [Validators.required]],
            });
          }
        })
      }

    onSubmit() {
      console.log("onSubmit");
      this.oEvento2Send = {
        id: this.oForm.value.id,
        fecha: this.oForm.value.fecha,
        descripcion: this.oForm.value.descripcion,
      }
      if (this.oForm.valid) {
        this.oEventoService.updateOne(this.oEvento2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Evento " + this.id + " updated";
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
        this.oRouter.navigate(['/admin/evento/view', this.id])
      })
      this.myModal.show()
    }


}
