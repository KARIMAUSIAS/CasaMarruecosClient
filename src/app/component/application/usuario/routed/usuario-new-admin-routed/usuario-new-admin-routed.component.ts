import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { SessionService } from 'src/app/service/session.service';
import { UsuarioService } from 'src/app/service/usuario.service';
declare let bootstrap: any;

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oUsuario: IUsuario = null;
    oUsuario2Form: IUsuario2Form = null;
    oUsuario2Send: IUsuario2Send = null;
    oForm: FormGroup<IUsuario2Form>;
    // modal
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";

    constructor(
      private oRouter: Router,
      private oUsuarioService: UsuarioService,
      private oFormBuilder: FormBuilder,
      private oSessionService: SessionService
    ) {
    }

    ngOnInit() {
        this.oSessionService.check;
      this.oForm = <FormGroup>this.oFormBuilder.group({
        id: [''],
        nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        apellido1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        apellido2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        usuario: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
      });
    }

    onSubmit() {
      console.log("onSubmit");
      this.oUsuario2Send = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre,
        apellido1: this.oForm.value.apellido1,
        apellido2: this.oForm.value.apellido2,
        email: this.oForm.value.email,
        usuario: this.oForm.value.usuario,
        tipousuario: { id: 2  }
      }
      if (this.oForm.valid) {
        this.oUsuarioService.newOne(this.oUsuario2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Usuario " + data + " created";
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
        this.oRouter.navigate(['/admin/usuario/view', data])
      })
      this.myModal.show()
    }

  }

