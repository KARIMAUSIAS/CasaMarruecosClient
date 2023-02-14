import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IIncidencia, IIncidencia2Form, IIncidencia2Send } from 'src/app/model/incidencia-interface';
import { IncidenciaService } from 'src/app/service/incidencia.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IUsuario } from 'src/app/model/usuario-interface';
import { Location } from '@angular/common';
declare let bootstrap: any;

@Component({
  selector: 'app-incidencia-edit-admin-routed',
  templateUrl: './incidencia-edit-admin-routed.component.html',
  styleUrls: ['./incidencia-edit-admin-routed.component.css']
})
export class IncidenciaEditAdminRoutedComponent implements OnInit {

    id: number = 0;
    oIncidencia: IIncidencia = null;
    oIncidencia2Form: IIncidencia2Form = null;
    oIncidencia2Send: IIncidencia2Send = null;
    oForm: FormGroup<IIncidencia2Form>;
    // modal
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    // foreigns
    usuarioDescription: string = "";

    constructor(
      private oRouter: Router,
      protected oLocation: Location,
      private oActivatedRoute: ActivatedRoute,
      private oIncidenciaService: IncidenciaService,
      private oFormBuilder: FormBuilder,
      private oUsuarioService: UsuarioService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
      this.getOne();

    }

    getOne() {
        this.oIncidenciaService.getOne(this.id).subscribe({
          next: (data: IIncidencia) => {
            this.oIncidencia = data;
            console.log(data);
            this.oForm = <FormGroup>this.oFormBuilder.group({
              id: [data.id, [Validators.required]],
              lugar: [data.lugar, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
              descripcion: [data.descripcion],
              fecha: [data.fecha, [Validators.required]],
              id_usuario: [data.usuario.id, [Validators.required]]
            });
            this.updateUsuarioDescription(this.oIncidencia.usuario.id);
          }
        })
      }

    onSubmit() {
      console.log("onSubmit");
      this.oIncidencia2Send = {
        id: this.oForm.value.id,
        lugar: this.oForm.value.lugar,
        fecha: this.oForm.value.fecha,
        descripcion: this.oForm.value.descripcion,
        usuario: {id: this.oForm.value.id_usuario  }
      }
      if (this.oForm.valid) {
        this.oIncidenciaService.updateOne(this.oIncidencia2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Incidencia " + this.id + " updated";
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
        this.oRouter.navigate(['/admin/incidencia/view', this.id])
      })
      this.myModal.show()

    }

    openModalFindUsuario(): void {
      this.myModal = new bootstrap.Modal(document.getElementById("findUsuario"), { //pasar el myModal como parametro
        keyboard: false
      })
      this.myModal.show()
    }

    closeUsuarioModal(id_usuario: number) {
      this.oForm.controls['id_usuario'].setValue(id_usuario);
      this.updateUsuarioDescription(id_usuario);
      this.myModal.hide();
    }

    updateUsuarioDescription(id_usuario: number) {
      this.oUsuarioService.getOne(id_usuario).subscribe({
        next: (data: IUsuario) => {
          this.usuarioDescription = data.nombre;
        },
        error: (error: any) => {
          this.usuarioDescription = "usuario not found";
          this.oForm.controls['id_usuario'].setErrors({'incorrect': true});
        }
      })
    }

}
