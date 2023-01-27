import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEvento, IEvento2Form, IEvento2Send } from 'src/app/model/evento-interface';
import { EventoService } from 'src/app/service/evento.service';
import { IncidenciaService } from 'src/app/service/incidencia.service';
import { SessionService } from 'src/app/service/session.service';
declare let bootstrap: any;

@Component({
  selector: 'app-evento-new-admin-routed',
  templateUrl: './evento-new-admin-routed.component.html',
  styleUrls: ['./evento-new-admin-routed.component.css']
})
export class EventoNewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oEvento: IEvento = null;
    oEvento2Form: IEvento2Form = null;
    oEvento2Send: IEvento2Send = null;
    oForm: FormGroup<IEvento2Form>;
    // modal
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    incidenciaDescription: string = "";
    id_incidencia:number;

    constructor(
      private oRouter: Router,
      private oEventoService: EventoService,
      private oFormBuilder: FormBuilder,
      private oSessionService: SessionService,
      private oIncidenciaService: IncidenciaService,
    ) {
    }

    ngOnInit() {
      this.oForm = <FormGroup>this.oFormBuilder.group({
        id: [''],
        fecha: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
      });
    }

    onSubmit() {
      console.log("onSubmit");
      this.oEvento2Send = {
        id: this.oForm.value.id,
        fecha: this.oForm.value.fecha,
        descripcion: this.oForm.value.descripcion,
      }
      if (this.oForm.valid) {
        this.oEventoService.newOne(this.oEvento2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Evento " + data + " created";
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
        this.oRouter.navigate(['/admin/evento/view', data])
      })
      this.myModal.show()
    }

}
