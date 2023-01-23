import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IIncidencia, IIncidencia2Form, IIncidencia2Send } from 'src/app/model/incidencia-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { IncidenciaService } from 'src/app/service/incidencia.service';
import { SessionService } from 'src/app/service/session.service';
import { UsuarioService } from 'src/app/service/usuario.service';
declare let bootstrap: any;

@Component({
  selector: 'app-incidencia-new-admin-routed',
  templateUrl: './incidencia-new-admin-routed.component.html',
  styleUrls: ['./incidencia-new-admin-routed.component.css']
})
export class IncidenciaNewAdminRoutedComponent implements OnInit {

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
    usuarioDescription: string = "";
    id_usuario:number;

    constructor(
      private oRouter: Router,
      private oIncidenciaService: IncidenciaService,
      private oFormBuilder: FormBuilder,
      private oSessionService: SessionService,
      private oUsuarioService: UsuarioService,
    ) {
    }

    ngOnInit() {
        this.oSessionService.check;
      this.oForm = <FormGroup>this.oFormBuilder.group({
        id: [''],
        lugar: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        fecha: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        id_usuario: ["", [Validators.required]]
      });
      this.updateUsuarioDescription(this.id_usuario);
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
        this.oIncidenciaService.newOne(this.oIncidencia2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Incidencia " + data + " created";
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
        this.oRouter.navigate(['/admin/incidencia/view', data])
      })
      this.myModal.show()
    }

    updateUsuarioDescription(id_usuario: number) {
        this.oUsuarioService.getOne(id_usuario).subscribe({
          next: (data: IUsuario) => {
            this.usuarioDescription = data.usuario;
          },
          error: (error: any) => {
            this.usuarioDescription = "usuario not found";
            this.oForm.controls['id_usuario'].setErrors({'incorrect': true});
          }
        })
      }
      closeUsuarioModal(id_usuario: number) {
        this.oForm.controls['id_usuario'].setValue(id_usuario);
        this.updateUsuarioDescription(id_usuario);
        this.myModal.hide();
      }

      openModalFindUsuario(): void {
        this.myModal = new bootstrap.Modal(document.getElementById("findUsuario"), { //pasar el myModal como parametro
          keyboard: false
        })
        this.myModal.show()
      }

}
