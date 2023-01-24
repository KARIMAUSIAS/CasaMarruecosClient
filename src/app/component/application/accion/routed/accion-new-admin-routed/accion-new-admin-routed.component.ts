import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAccion, IAccion2Form, IAccion2Send } from 'src/app/model/accion-interface';
import { IIncidencia } from 'src/app/model/incidencia-interface';
import { AccionService } from 'src/app/service/accion.service';
import { IncidenciaService } from 'src/app/service/incidencia.service';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;

@Component({
  selector: 'app-accion-new-admin-routed',
  templateUrl: './accion-new-admin-routed.component.html',
  styleUrls: ['./accion-new-admin-routed.component.css']
})
export class AccionNewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oaccion: IAccion = null;
    oaccion2Form: IAccion2Form = null;
    oaccion2Send: IAccion2Send = null;
    oForm: FormGroup<IAccion2Form>;
    // modal
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    incidenciaDescription: string = "";
    id_incidencia:number;

    constructor(
      private oRouter: Router,
      private oAccionService: AccionService,
      private oFormBuilder: FormBuilder,
      private oSessionService: SessionService,
      private oIncidenciaService: IncidenciaService,
    ) {
    }

    ngOnInit() {
        this.oSessionService.check;
      this.oForm = <FormGroup>this.oFormBuilder.group({
        id: [''],
        fecha: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        id_incidencia: ["", [Validators.required]]
      });
      this.updateIncidenciaDescription(this.id_incidencia);
    }

    onSubmit() {
      console.log("onSubmit");
      this.oaccion2Send = {
        id: this.oForm.value.id,
        fecha: this.oForm.value.fecha,
        descripcion: this.oForm.value.descripcion,
        incidencia: {id: this.oForm.value.id_incidencia  }
      }
      if (this.oForm.valid) {
        this.oAccionService.newOne(this.oaccion2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Accion " + data + " created";
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
        this.oRouter.navigate(['/admin/accion/view', data])
      })
      this.myModal.show()
    }

    updateIncidenciaDescription(id_incidencia: number) {
        this.oIncidenciaService.getOne(id_incidencia).subscribe({
          next: (data: IIncidencia) => {
            this.incidenciaDescription = data.lugar;
          },
          error: (error: any) => {
            this.incidenciaDescription = "Incidencia not found";
            this.oForm.controls['id_incidencia'].setErrors({'incorrect': true});
          }
        })
      }
      closeIncidenciaModal(id_incidencia: number) {
        this.oForm.controls['id_incidencia'].setValue(id_incidencia);
        this.updateIncidenciaDescription(id_incidencia);
        this.myModal.hide();
      }

      openModalFindIncidencia(): void {
        this.myModal = new bootstrap.Modal(document.getElementById("findIncidencia"), { //pasar el myModal como parametro
          keyboard: false
        })
        this.myModal.show()
      }

}
