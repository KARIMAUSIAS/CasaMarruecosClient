import { TipousuarioService } from './../../../../../service/tipousuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ITipousuario } from 'src/app/model/tipousuario-interface';
import { Location } from '@angular/common';
declare let bootstrap: any;

@Component({
  selector: 'app-usuario-edit-admin-routed',
  templateUrl: './usuario-edit-admin-routed.component.html',
  styleUrls: ['./usuario-edit-admin-routed.component.css']
})
export class UsuarioEditAdminRoutedComponent implements OnInit {

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
    // foreigns
    tipousuarioDescription: string = "";

    constructor(
      private oRouter: Router,
      protected oLocation: Location,
      private oActivatedRoute: ActivatedRoute,
      private oUsuarioService: UsuarioService,
      private oFormBuilder: FormBuilder,
      private oTipousuarioService: TipousuarioService,
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
      this.getOne();

    }

    getOne() {
      this.oUsuarioService.getOne(this.id).subscribe({
        next: (data: IUsuario) => {
          this.oUsuario = data;
          console.log(data);
          this.oForm = <FormGroup>this.oFormBuilder.group({
            id: [data.id, [Validators.required]],
            nombre: [data.nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
            apellido1: [data.apellido1, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
            apellido2: [data.apellido2, [ Validators.minLength(2), Validators.maxLength(15)]],
            email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,9}$')]],
            usuario: [data.usuario, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
            id_tipousuario: [data.tipousuario.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
          });
          this.updatetipousuarioDescription(this.oUsuario.tipousuario.id);
        }
      })
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
        tipousuario: { id: this.oForm.value.id_tipousuario }
      }
      if (this.oForm.valid) {
        this.oUsuarioService.updateOne(this.oUsuario2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Usuario " + this.id + " updated";
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
        this.oRouter.navigate(['/admin/Usuario/view', this.id])
      })
      this.myModal.show()
      this.oLocation.back();
    }

    openModalFindTipousuario(): void {
      this.myModal = new bootstrap.Modal(document.getElementById("findTipousuario"), { //pasar el myModal como parametro
        keyboard: false
      })
      this.myModal.show()
    }

    closeTipousuarioModal(id_tipousuario: number) {
      this.oForm.controls['id_tipousuario'].setValue(id_tipousuario);
      this.updatetipousuarioDescription(id_tipousuario);
      this.myModal.hide();
    }

    updatetipousuarioDescription(id_tipousuario: number) {
      this.oTipousuarioService.getOne(id_tipousuario).subscribe({
        next: (data: ITipousuario) => {
          this.tipousuarioDescription = data.nombre;
        },
        error: (error: any) => {
          this.tipousuarioDescription = "tipousuario not found";
          this.oForm.controls['id_tipousuario'].setErrors({'incorrect': true});
        }
      })
    }

  }
