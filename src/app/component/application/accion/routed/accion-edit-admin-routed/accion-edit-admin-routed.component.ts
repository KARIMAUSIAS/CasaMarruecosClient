import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IAccion, IAccion2Form, IAccion2Send } from 'src/app/model/accion-interface';
import { AccionService } from 'src/app/service/accion.service';
import { IIncidencia } from 'src/app/model/incidencia-interface';
import { IncidenciaService } from 'src/app/service/incidencia.service';
declare let bootstrap: any;

@Component({
  selector: 'app-accion-edit-admin-routed',
  templateUrl: './accion-edit-admin-routed.component.html',
  styleUrls: ['./accion-edit-admin-routed.component.css']
})
export class AccionEditAdminRoutedComponent implements OnInit {

    id: number = 0;
    oAccion: IAccion = null;
    oAccion2Form: IAccion2Form = null;
    oAccion2Send: IAccion2Send = null;
    oForm: FormGroup<IAccion2Form>;
    // modal
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    // foreigns
    incidenciaDescription: string = "";

    constructor(
      private oRouter: Router,
      protected oLocation: Location,
      private oActivatedRoute: ActivatedRoute,
      private oAccionService: AccionService,
      private oFormBuilder: FormBuilder,
      private oIncidenciaService: IncidenciaService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
      this.getOne();

    }

    getOne() {
        this.oAccionService.getOne(this.id).subscribe({
          next: (data: IAccion) => {
            this.oAccion = data;
            console.log(data);
            this.oForm = <FormGroup>this.oFormBuilder.group({
              id: [data.id, [Validators.required]],
              descripcion: [data.descripcion],
              fecha: [data.fecha, [Validators.required]],
              id_incidencia: [data.incidencia.id, [Validators.required]]
            });
            this.updateIncidenciaDescription(this.oAccion.incidencia.id);
          }
        })
      }

    onSubmit() {
      console.log("onSubmit");
      this.oAccion2Send = {
        id: this.oForm.value.id,
        fecha: this.oForm.value.fecha,
        descripcion: this.oForm.value.descripcion,
        incidencia: {id: this.oForm.value.id_incidencia  }
      }
      if (this.oForm.valid) {
        this.oAccionService.updateOne(this.oAccion2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Accion " + this.id + " updated";
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
        this.oRouter.navigate(['/admin/accion/view', this.id])
      })
      this.myModal.show()
      this.oLocation.back();
    }

    openModalFindIncidencia(): void {
      this.myModal = new bootstrap.Modal(document.getElementById("findIncidencia"), { //pasar el myModal como parametro
        keyboard: false
      })
      this.myModal.show()
    }

    closeIncidenciaModal(id_incidencia: number) {
      this.oForm.controls['id_incidencia'].setValue(id_incidencia);
      this.updateIncidenciaDescription(id_incidencia);
      this.myModal.hide();
    }

    updateIncidenciaDescription(id_incidencia: number) {
      this.oIncidenciaService.getOne(id_incidencia).subscribe({
        next: (data: IIncidencia) => {
          this.incidenciaDescription = data.lugar;
        },
        error: (error: any) => {
          this.incidenciaDescription = "incidencia not found";
          this.oForm.controls['id_incidencia'].setErrors({'incorrect': true});
        }
      })
    }

}
